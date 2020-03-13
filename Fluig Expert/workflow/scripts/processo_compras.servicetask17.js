function servicetask17(attempt, message) {
	
	var codigo = hAPI.getCardValue("txt_cod_produto");
	var descricao = hAPI.getCardValue("txt_descr_produto");
	var tipo = hAPI.getCardValue("txt_tp_produto");
	
	var c1 = DatasetFactory.createConstraint("ccod", codigo, codigo, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("cdescr", descricao, descricao, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("ctipo", tipo, tipo, ConstraintType.MUST);
	
	var filtro = new Array(c1, c2, c3);
		
	var dataset = DatasetFactory.getDataset("ds_protheus_incluir_produto", null, filtro, null);

	if(dataset.getValue(0, "iNFO") != "OK"){
		throw "Houve um erro na integração";
	}
}