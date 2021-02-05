function enableFields(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	
	if(ATIV_ATUAL == ATV_APROV_GESTOR){
		
		form.setEnabled("txt_solicitante", false);
		form.setEnabled("txt_solic_email", false);
		form.setEnabled("txt_dt_solic", false);
		form.setEnabled("txt_cod_cliente", false);
		form.setEnabled("txt_loja", false);
		form.setEnabled("txt_tipo_cliente", false);
		form.setEnabled("txt_nome_cliente", false);
		form.setEnabled("txt_nome_fantasia", false);
		form.setEnabled("txt_cep", false);
		form.setEnabled("txt_cd_municipio", false);
		form.setEnabled("txt_municipio", false);
		form.setEnabled("txt_endereco", false);
		
	}
}