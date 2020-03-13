function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetFactory.newDataset();
	
	dataset.addColumn("Tipo");
	dataset.addColumn("Total_Tarefas");
	
	var codUser = null;
	
	if(constraints != null){
		for(var i = 0; i < constraints.length; i++){
			if(constraints[i].fieldName == "coduser"){
				codUser = constraints[i].initialValue;
			}
		}
	}
	
	var sendData = {
			companyId: fluigAPI.getSecurityService().getCurrentTenantId() + '',
			serviceCode: "Tasks",
			endpoint: "/getResumedTasks/" + codUser,
			method: "GET"
	}
	
	var clientService = fluigAPI.getAuthorizeClientService();
	var vo = clientService.invokeService(JSON.stringify(sendData));
	
	var json = JSON.parse(vo.getResult());
	
	for(var i=0; i < json.content.length; i++){
		dataset.addRow(new Array(
			json.content[i]["type"],
			json.content[i]["totalTask"]
		));
	}
	
	//new java.lang.Thread.sleep(10000);
	
	return dataset;
}

function onMobileSync(user) {

}