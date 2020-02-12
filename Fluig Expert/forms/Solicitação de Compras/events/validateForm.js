function validateForm(form){
	
	var ATIV_ATUAL = getValue("WKNumState");
	
	var INICIO = 2;
	var APROV_GESTOR = 3;
	var APROV_FINANC = 7;
	var CORRECAO = 13;
	
	var msg = "";
	
	if(ATIV_ATUAL == INICIO || ATIV_ATUAL == 0){
		if (isNullOrEmpty(form, "txt_telefoneRamal")){
			msg += "<br /> - O telefone é obrigatório.";
		}
	}
	
	if(msg != ""){
		throw "Os seguintes campos são de preenchimento obrigatório: " + msg;
	}
}

function isNullOrEmpty(form, campo){
	if(form.getValue(campo) == null || form.getValue(campo).trim() == ""){
		return true;
	}
	
	return false;
}