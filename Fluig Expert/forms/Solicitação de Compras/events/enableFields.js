function enableFields(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	var ATV_APROV_FINANC = 11;
	
	// Desabilitar painel Solicitante
	if(ATIV_ATUAL == ATV_APROV_GESTOR || ATIV_ATUAL == ATV_APROV_FINANC){
		form.setEnabled("txt_telefone_ramal", false);
		form.setEnabled("txt_pais_unidade", false);
		form.setEnabled("txt_estado_unidade", false);
		form.setEnabled("txt_justificativa", false);
		
		var indexes = form.getChildrenIndexes("tb_produtos");

		for (var i = 0; i < indexes.length; i++) {
			form.setEnabled("txt_produto___" + indexes[i], false);
			form.setEnabled("txt_quantidade___" + indexes[i], false);
			form.setEnabled("txt_valor_unitario___" + indexes[i], false);
			form.setEnabled("txt_valor_total___" + indexes[i], false);
	    }
	}
	
	if(ATIV_ATUAL == ATV_APROV_FINANC){
		form.setEnabled("txt_justificativa_gestor", false);
		form.setEnabled("txt_aprov_gestor", false);
	}
}