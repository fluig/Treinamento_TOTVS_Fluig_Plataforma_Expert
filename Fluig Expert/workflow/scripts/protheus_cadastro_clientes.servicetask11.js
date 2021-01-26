function servicetask11() {
	try{
		var address = hAPI.getCardValue("txt_endereco");
		var zipCode = hAPI.getCardValue("txt_cep").replace("-","");
		var stateId = hAPI.getCardValue("txt_cd_municipio");
		var stateInternalId = hAPI.getCardValue("txt_cd_municipio");
		var stateDescription = hAPI.getCardValue("txt_municipio");
		var cityDescription = hAPI.getCardValue("txt_municipio");
		var storeId = hAPI.getCardValue("txt_loja");
		var shortName = hAPI.getCardValue("txt_nome_fantasia");
		var strategicCustomerType = hAPI.getCardValue("txt_tipo_cliente");
		var code = hAPI.getCardValue("txt_cod_cliente");
		var name = hAPI.getCardValue("txt_nome_cliente");
		
		var c1 = DatasetFactory.createConstraint("address", address, address, ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("zipCode", zipCode, zipCode, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("stateId", stateId, stateId, ConstraintType.MUST);
		var c4 = DatasetFactory.createConstraint("stateInternalId", stateInternalId, stateInternalId, ConstraintType.MUST);
		var c5 = DatasetFactory.createConstraint("stateDescription", stateDescription, stateDescription, ConstraintType.MUST);
		var c6 = DatasetFactory.createConstraint("cityDescription", cityDescription, cityDescription, ConstraintType.MUST);
		var c7 = DatasetFactory.createConstraint("storeId", storeId, storeId, ConstraintType.MUST);
		var c8 = DatasetFactory.createConstraint("shortName", shortName, shortName, ConstraintType.MUST);
		var c9 = DatasetFactory.createConstraint("strategicCustomerType", strategicCustomerType, strategicCustomerType, ConstraintType.MUST);
		var c10 = DatasetFactory.createConstraint("code", code, code, ConstraintType.MUST);
		var c11 = DatasetFactory.createConstraint("name", name, name, ConstraintType.MUST);

		var filtro = new Array(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11);
		
		var dataset = DatasetFactory.getDataset("protheus_criar_cliente", null, filtro, null);
		
		if(dataset.getValue(0, "status") != "201"){
			throw dataset.getValue(0, "detalhe");
		}
	} catch(e){
		log.info("Erro: " + e);
		throw("Houve um erro na integração:"+e);
	}
}