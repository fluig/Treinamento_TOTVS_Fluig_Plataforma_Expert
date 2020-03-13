function enableFields(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	var ATV_APROV_FINANC = 11;
	
	if(ATIV_ATUAL == ATV_APROV_GESTOR || ATIV_ATUAL == ATV_APROV_FINANC){
		form.setEnabled("txt_telefone_ramal", false);
		form.setEnabled("txt_pais_unidade", false);
		form.setEnabled("txt_estado_unidade", false);
		form.setEnabled("txt_justificativa", false);
	}
}