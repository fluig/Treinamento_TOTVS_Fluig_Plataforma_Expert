function validateForm(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	
	var msg = "";
	
	if(ATIV_ATUAL == 0 || ATIV_ATUAL == ATV_INICIO){
		if(form.getValue("txt_cod_cliente") == ""){
			msg += "<br />-Código Cliente";
		}
		if(form.getValue("txt_loja") == ""){
			msg += "<br />-Loja";
		}
		if(form.getValue("txt_tipo_cliente") == ""){
			msg += "<br />-Tipo";
		}
		if(form.getValue("txt_tipo_cliente") == null){
			msg += "<br />-Tipo";
		}
		if(form.getValue("txt_nome_cliente") == ""){
			msg += "<br />-Nome Cliente";
		}
		if(form.getValue("txt_nome_fantasia") == ""){
			msg += "<br />-Nome Fantasia";
		}
		if(form.getValue("txt_cep") == ""){
			msg += "<br />-CEP";
		}		
		if(form.getValue("txt_cd_municipio") == ""){
			msg += "<br />-Cd. Municipio";
		}
		if(form.getValue("txt_municipio") == ""){
			msg += "<br />-Municipio";
		}
		if(form.getValue("txt_endereco") == ""){
			msg += "<br />-Endereço";
		}
	}
	
	else if(ATIV_ATUAL == ATV_APROV_GESTOR){
		if(form.getValue("txt_aprov_gestor") == ""){
			msg += "<br />-Solicitação aprovada?";
		} 
		
		else if(form.getValue("txt_aprov_gestor") == "nao" && form.getValue("txt_justificativa_gestor") == ""){
			msg += "<br />-Justificativa";
		}
	}
	
	if(msg != ""){
		throw "Os seguintes campos são de preenchimento obrigatório: " + msg;
	}
	
}