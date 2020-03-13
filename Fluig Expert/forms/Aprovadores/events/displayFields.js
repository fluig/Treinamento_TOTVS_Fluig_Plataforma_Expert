function displayFields(form,customHTML){
	
	if(form.getFormMode() == "VIEW"){
		
		customHTML.append("<script>");		
		customHTML.append("$(document).ready(function (){");
		
		customHTML.append("$(\"label.obrigatorio span\").hide();");
		customHTML.append("$(\"table .fluigicon\").hide();");
	
		customHTML.append("});");
		customHTML.append("</script>");
	}
	
	if(form.getFormMode() == "ADD" || form.getFormMode() == "MOD"){
		form.setValue("txt_data_atualizacao", dataAgora());
	}
}

function dataAgora(){
	return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(new java.util.Date());
}