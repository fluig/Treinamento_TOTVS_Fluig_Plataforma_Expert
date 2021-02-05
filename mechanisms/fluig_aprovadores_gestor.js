function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	var dataset = DatasetFactory.getDataset("fluig_aprovadores_gestor", null, null, null);
	
	for(var i=0; i<dataset.rowsCount; i++){
		userList.add(dataset.getValue(i, "codigo_aprovador"));
	}
	
	return userList;

}