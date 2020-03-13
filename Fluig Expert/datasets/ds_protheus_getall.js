function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data();
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getWSPRODUTOSSOAP();
	var response = service.getALL();

	return response;
}

function defineStructure() {
	addColumn("cODIGO");
	addColumn("dESCRICAO");
	addColumn("tIPO");
	setKey(["cODIGO"]);
}

function onSync(lastSyncDate) {
	var serviceData = data();
	var synchronizedDataset = DatasetBuilder.newDataset();

	try {
		var resultDataset = processResult(callService());
		if (resultDataset != null) {
			var values = resultDataset.getValues();
			for (var i = 0; i < values.length; i++) {
				synchronizedDataset.addOrUpdateRow(values[i]);
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

	result = result.getSTRUCTALL();

		dataset.addColumn("cODIGO");
	dataset.addColumn("dESCRICAO");
	dataset.addColumn("tIPO");

	for (var i = 0; i < result.size(); i++) {
		dataset.addRow([result.get(i).getCODIGO(), result.get(i).getDESCRICAO(), result.get(i).getTIPO()]);
	}

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');


	dataset.addRow([error.message]);

	return dataset;
}

function getParamValue(param, assignment) {
	if (assignment == 'VARIABLE') {
		return getValue(param);
	} else if (assignment == 'NULL') {
		return null;
	}
	return param;
}

function hasValue(value) {
	return value !== null && value !== undefined;
}

function isPrimitive(value) {
	return ((typeof value === 'string') || value.substring !== undefined) || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined';
}


function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("_168._112._228._18._8086.ObjectFactory");

	return objectFactory;
}



function data() {
	return {
  "fluigService" : "WS_PRODUTOS",
  "operation" : "getALL",
  "soapService" : "WSPRODUTOS",
  "portType" : "WSPRODUTOSSOAP",
  "locatorClass" : "_168._112._228._18._8086.WSPRODUTOS",
  "portTypeMethod" : "getWSPRODUTOSSOAP",
  "parameters" : [ ],
  "inputValues" : { },
  "inputAssignments" : { },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "enabled" : false
  }
}
}