function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	var dataset = DatasetFactory.getDataset("ds_gestao", null, null, null);
	
	for(var i=0; i<dataset.rowsCount; i++){
		userList.add(dataset.getValue(i, "Matricula"));
	}
	
	return userList;

}