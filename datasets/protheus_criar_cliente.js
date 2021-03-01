function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("status");
	dataset.addColumn("detalhe");
	
	var parametros = data();
		
	if(constraints != null){
		for(var i = 0; i < constraints.length; i++){
			if(constraints[i].fieldName == "address"){
				parametros["address"]["address"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "zipCode"){
				parametros["address"]["zipCode"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "stateId"){
				parametros["address"]["state"]["stateId"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "stateInternalId"){
				parametros["address"]["state"]["stateInternalId"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "stateDescription"){
				parametros["address"]["state"]["stateDescription"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "cityDescription"){
				parametros["address"]["city"]["cityDescription"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "storeId"){
				parametros["storeId"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "shortName"){
				parametros["shortName"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "strategicCustomerType"){
				parametros["strategicCustomerType"] = String(constraints[i].initialValue);
			}
			else if(constraints[i].fieldName == "code"){
				parametros["code"] = String(constraints[i].initialValue);
			}		
			else if(constraints[i].fieldName == "name"){
				parametros["name"] = String(constraints[i].initialValue);
			}
		}
	}
	
	/*
	* Integrar com esta API
	* http://localhost:8084/rest/index/CUSTOMERVENDOR
	*/

	var sendData = {
		companyId: String(fluigAPI.getSecurityService().getCurrentTenantId()),
		serviceCode: "PROTHEUS_CUSTOMERVENDOR",
		endpoint: "/",
		method: "POST",
		params: parametros
	}
	
	var clientService = fluigAPI.getAuthorizeClientService();
	var vo = clientService.invokeService(JSON.stringify(sendData));
	
	var status = String(vo.getHttpStatusResult())
	
	// Sucesso na integração
	if(status == "201"){
		dataset.addRow(new Array(
			status,
			"Cliente criado com sucesso"
		));	
	} 
	
	// Erro de negocio na Integração
	else if (status == "400"){
	
		// Pegar o retorno da API
		var parseResult = JSON.parse(vo.getResult());
		
		// A partir do retorno pegar a mensagem de erro
		var parseError = JSON.parse(parseResult.errorMessage);

		// A partir da mensagem de erro, pegar somente os detalhes do erro
		var msg = parseError.detailedMessage
		
		dataset.addRow(new Array(
			status,
			msg
		));
	}
	
	// Erro desconhecido/Forbidden
	else {
		dataset.addRow(new Array(
			"403",
			"Ops, aconteceu um erro desconhecido, por favor tente mais tarde."
		));
	}

	return dataset;
}

function data(){
	return {
		"address": {
	        "address": "",
	        "zipCode": "",
	        "state": {
	            "stateId": "",
	            "stateInternalId": "",
	            "stateDescription": ""
	        },
			"city": {
	            "cityDescription": ""
	        }
	    },
	    "storeId": "",
	    "shortName": "",
	    "strategicCustomerType": "",
	    "code": "",
	    "type": 1, // Enviar 1 (INTEIRO) para criar um registro do tipo cliente
	    "name": ""
	}
}