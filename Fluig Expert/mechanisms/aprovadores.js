function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	var dataset = DatasetFactory.getDataset("ds_mecanismo_aprovadores", null, null, null);
	
	for(var i=0; i<dataset.rowsCount; i++){
		userList.add(dataset.getValue(i, "codigo_aprovador"));
	}
	
	return userList;

}