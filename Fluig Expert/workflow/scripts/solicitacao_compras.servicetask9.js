function servicetask9(attempt, message) {
	
	var codigo = hAPI.getCardValue("txt_codigo");
	var descricao = hAPI.getCardValue("txt_descricao");
	var tipo = hAPI.getCardValue("txt_tpProduto");
	
	var c1 = DatasetFactory.createConstraint("ccod", codigo, codigo, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("cdescr", descricao, descricao, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("ctipo", tipo, tipo, ConstraintType.MUST);
	
	var filtro = new Array(c1, c2, c3);
	
	var dataset = DatasetFactory.getDataset("ds_incluir_produto", null, filtro, null);
	
	if(dataset.getValue(0, "iNFO") != "OK"){
		throw "Houve um erro na integração";
	}
	
	return true;
}
