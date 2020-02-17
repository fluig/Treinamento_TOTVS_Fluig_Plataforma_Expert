function displayFields(form,customHTML){
	
	
	var user = getValue("WKUser");
	
	var ATIV_ATUAL = getValue("WKNumState");
	
	var INICIO = 2;
	var APROV_GESTOR = 3;
	var APROV_FINANC = 7;
	var CORRECAO = 13;
	
	customHTML.append("<script>");
	customHTML.append("$(document).ready(function(){");
	
	if(ATIV_ATUAL == INICIO || ATIV_ATUAL == 0){
		
		form.setValue("txt_solicitante", user);
		form.setValue("txt_data", dataAgora());

		customHTML.append("$(\"#panelAprovacaoGestor\").hide();");
		customHTML.append("$(\"#panelAprovacaoFinanceiro\").hide();");
		customHTML.append("$(\"#panelIntegracaoProduto\").hide();");
	}
	
	customHTML.append("});");
	customHTML.append("</script>");
	
}

function dataAgora(){
	return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(new java.util.Date());
}