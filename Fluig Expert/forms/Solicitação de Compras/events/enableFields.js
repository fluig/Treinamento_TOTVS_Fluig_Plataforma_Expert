function enableFields(form){ 
	var ATIV_ATUAL = getValue("WKNumState");
	
	var INICIO = 2;
	var APROV_GESTOR = 3;
	var APROV_FINANC = 7;
	var CORRECAO = 13;
	
	
	if(ATIV_ATUAL == APROV_GESTOR){
		form.setEnabled("txt_email", false);
	}
}