function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data();
	
	var sendData = {
		companyId : fluigAPI.getSecurityService().getCurrentTenantId() + '',
		serviceCode : serviceData.fluigService,
		endpoint : mountPath(serviceData, constraints),
		method : serviceData.verb,
		headers : getHeaders(serviceData, constraints),
		options: serviceData.extraParams.options 
			? serviceData.extraParams.options : {},
		timeoutService: serviceData.extraParams.timeoutService 
			? serviceData.extraParams.timeoutService : '100'
	}
	var params = mountBody(serviceData, constraints);
	if (Array.isArray(params) || typeof params != 'object') {
		sendData.strParams = JSON.stringify(params);
	} else {
		sendData.params = params;
	}

	var clientService = fluigAPI.getAuthorizeClientService();
	var response = clientService.invokeService(JSON.stringify(sendData));

	return response;
}

function mountBody(serviceData, constraints) {
	var params = serviceData.parameters;
	
	var values = serviceData.inputValues;
	verifyConstraints(values, constraints);

	for (var i = 0; i < params.length; i++) {
		if (params[i].paramType == 'body') {
			return values[params[i].name];
		}
	}
}

function mountPath(serviceData, constraints) {
	var path = serviceData.path;
	var params = serviceData.parameters;
	
	var values = serviceData.inputValues;
	verifyConstraints(values, constraints);

	for (var i = 0; i < params.length; i++) {
		var value = values[params[i].name];
		if (value) {
			if (params[i].paramType == 'query') {
				if (Array.isArray(value)) {
					for (var j = 0; j < value.length; j++) {
						if (path.indexOf('?') > -1) {
							path += '&';
						} else {
							path += '?';
						}
						path += params[i].name + '=' + value[j];
					}
				} else {
					if (path.indexOf('?') > -1) {
						path += '&';
					} else {
						path += '?';
					}
					path += params[i].name + '=' + value;
				}
			} else if (params[i].paramType == 'path') {
				path = path.replace('{' + params[i].name + '}', value);
			}
		}
	}

	return path;
}

function getHeaders(serviceData, constraints) {
	var params = serviceData.parameters;
	
	var values = serviceData.inputValues;
	verifyConstraints(values, constraints);
	var headers = serviceData.extraParams.headers;
	var requestHeaders = {};

	if (headers) {
		requestHeaders = headers;
	}

	for (var i = 0; i < params.length; i++) {
		var value = values[params[i].name];
		if (value) {
			if (params[i].paramType == 'header') {
				requestHeaders[params[i].name] = value;
			}
		}
	}

	return requestHeaders;
}

function defineStructure() {
	var dataset = processResult(callService());
	var columns = dataset.getColumnsName();
	for (var i = 0; i < dataset.getColumnsCount(); i++) {
		if (!DatabaseManager.isReservedWord(columns[i])) {
			addColumn(columns[i]);
		} else {
			addColumn('ds_' + columns[i]);
		}
	}
}

function onSync(lastSyncDate) {
	var serviceData = data();
	var synchronizedDataset = DatasetBuilder.newDataset();

	try {
		var resultDataset = processResult(callService());
		if (resultDataset != null) {
			var values = resultDataset.getValues();
			for (var i = 0; i < values.length; i++) {
				synchronizedDataset.addRow(values[i]);
			}
		}

	} catch(e) {
		log.info('Dataset synchronization error : ' + e.message);

	}
	return synchronizedDataset;
}

function verifyConstraints(params, constraints) {
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			try {
				params[constraints[i].fieldName] = JSON.parse(constraints[i].initialValue);
			} catch(e) {
				params[constraints[i].fieldName] = constraints[i].initialValue;
			}
		}
	}
}

function processResult(result) {
	var dataset = DatasetBuilder.newDataset();
	var json = JSON.parse(result.getResult());
	var extraParams = data().extraParams;
	var columns = new Array();
	if (extraParams.parseResult) {
		var pathParts = extraParams.resultPath.split('.');
		for (var i = 0; i < pathParts.length; i++) {
			var arrayParts = pathParts[i].replace(']', '').split('[');
			if (arrayParts.length == 2) {
				json = json[arrayParts[0]][arrayParts[1]];
			} else {
				json = json[pathParts[i]];
			}
		}
	}

	if (Array.isArray(json)) {
		for (var j = 0; j < json.length; j++) {
			var keys = Object.keys(json[j]);
			for (var k = 0; k < keys.length; k++) {
				if (columns.indexOf(keys[k]) == -1) {
					columns.push(keys[k]);
				}
			}
		}
	} else if (typeof json == 'object') {
		var keys = Object.keys(json);
		for (var k = 0; k < keys.length; k++) {
			if (columns.indexOf(keys[k]) == -1) {
				columns.push(keys[k]);
			}
		}
	} else {
		columns.push('response');
	}

	for (var i = 0; i < columns.length; i++) {
		dataset.addColumn(columns[i]);
	}

	if (Array.isArray(json)) {
		for (var j = 0; j < json.length; j++) {
			var row = new Array();
			for (var i = 0; i < columns.length; i++) {
				var value = json[j][columns[i]];
				if (typeof value == 'object') {
					row.push(JSON.stringify(value));
				} else {
					row.push(value);
				}
			}
			dataset.addRow(row);
		}
	} else if (typeof json == 'object') {
		var row = new Array();
		for (var i = 0; i < columns.length; i++) {
			var value = json[columns[i]];
			if (typeof value == 'object') {
				row.push(JSON.stringify(value));
			} else {
				row.push(value);
			}
		}
		dataset.addRow(row);
	} else {
		dataset.addRow([json]);
	}

	return dataset
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn('error');
	dataset.addRow([error.message]);

	return dataset;
}

function data() {
	return {
  "fluigService" : "FLUIG_Process_Management",
  "operation" : "resumeActivities",
  "path" : "/v2/activities/resume",
  "verb" : "GET",
  "api" : "Activities",
  "parameters" : [ {
    "name" : "processInstanceId",
    "paramType" : "query",
    "javaType" : "integer[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "processInstanceId",
      "paramType" : "query",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "movementSequence",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "active",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "slaStatus",
    "paramType" : "query",
    "javaType" : "string[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "slaStatus",
      "paramType" : "query",
      "javaType" : "string",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "processId",
    "paramType" : "query",
    "javaType" : "string[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "processId",
      "paramType" : "query",
      "javaType" : "string",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "requester",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "requesterName",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "manager",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "initialDeadlineDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "finalDeadlineDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "initialStartDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "finalStartDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "initialWarningDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "finalWarningDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "initialEndDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "finalEndDate",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "processVersion",
    "paramType" : "query",
    "javaType" : "integer[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "processVersion",
      "paramType" : "query",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "stateSequence",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "formFields",
    "paramType" : "query",
    "javaType" : "string[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "formFields",
      "paramType" : "query",
      "javaType" : "string",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "requesterLocal",
    "paramType" : "query",
    "javaType" : "integer[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "requesterLocal",
      "paramType" : "query",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "assigneeLocal",
    "paramType" : "query",
    "javaType" : "integer[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "assigneeLocal",
      "paramType" : "query",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  }, {
    "name" : "replacedUserCode",
    "paramType" : "query",
    "javaType" : "string",
    "objectType" : "primitive",
    "fields" : [ ]
  }, {
    "name" : "fields",
    "paramType" : "query",
    "javaType" : "string[ ]",
    "objectType" : "list",
    "fields" : [ {
      "name" : "fields",
      "paramType" : "query",
      "javaType" : "string",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  } ],
  "response" : {
    "name" : "response",
    "paramType" : "body",
    "javaType" : "ResumeProcessActivity",
    "objectType" : "complex",
    "fields" : [ {
      "name" : "onTime",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    }, {
      "name" : "warning",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    }, {
      "name" : "expired",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    }, {
      "name" : "active",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    }, {
      "name" : "completed",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    }, {
      "name" : "total",
      "javaType" : "integer",
      "objectType" : "primitive",
      "fields" : [ ]
    } ]
  },
  "inputValues" : {
    "processInstanceId" : "",
    "movementSequence" : "",
    "active" : "",
    "slaStatus" : "",
    "processId" : "",
    "requester" : "",
    "requesterName" : "",
    "manager" : "",
    "initialDeadlineDate" : "",
    "finalDeadlineDate" : "",
    "initialStartDate" : "",
    "finalStartDate" : "",
    "initialWarningDate" : "",
    "finalWarningDate" : "",
    "initialEndDate" : "",
    "finalEndDate" : "",
    "processVersion" : "",
    "stateSequence" : "",
    "formFields" : "",
    "requesterLocal" : "",
    "assigneeLocal" : "",
    "replacedUserCode" : "",
    "fields" : ""
  },
  "inputAssignments" : {
    "processInstanceId" : "VALUE",
    "movementSequence" : "VALUE",
    "active" : "VALUE",
    "slaStatus" : "VALUE",
    "processId" : "VALUE",
    "requester" : "VALUE",
    "requesterName" : "VALUE",
    "manager" : "VALUE",
    "initialDeadlineDate" : "VALUE",
    "finalDeadlineDate" : "VALUE",
    "initialStartDate" : "VALUE",
    "finalStartDate" : "VALUE",
    "initialWarningDate" : "VALUE",
    "finalWarningDate" : "VALUE",
    "initialEndDate" : "VALUE",
    "finalEndDate" : "VALUE",
    "processVersion" : "VALUE",
    "stateSequence" : "VALUE",
    "formFields" : "VALUE",
    "requesterLocal" : "VALUE",
    "assigneeLocal" : "VALUE",
    "replacedUserCode" : "VALUE",
    "fields" : "VALUE"
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : { }
}
}