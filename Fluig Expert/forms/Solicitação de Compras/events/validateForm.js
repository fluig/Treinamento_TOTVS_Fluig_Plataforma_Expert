function validateForm(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	var ATV_APROV_FINANC = 11;
	
	var msg = "";
	
	if(ATIV_ATUAL == 0 || ATIV_ATUAL == ATV_INICIO){
		if(isNullOrEmpty(form, "txt_telefone_ramal")) msg += "<br /> - " + i18n.translate("solicitante.telefoneRamal");
		if(isNullOrEmpty(form, "txt_pais_unidade")) msg += "<br /> - " + i18n.translate("solicitante.paisUnidade");
		if(isNullOrEmpty(form, "txt_estado_unidade")) msg += "<br /> - " + i18n.translate("solicitante.estadoUnidade");
		if(isNullOrEmpty(form, "txt_justificativa")) msg += "<br /> - " + i18n.translate("solicitante.justificativa");
		if(validarTbProdutos(form)) msg+= validarTbProdutos(form);		
	}
	
	else if(ATIV_ATUAL == ATV_APROV_GESTOR){
		if(isNullOrEmpty(form, "txt_aprov_gestor")) {
			msg += "<br /> - " + i18n.translate("aprovacaoGestor.aprovacao");
		} else{
			if(form.getValue("txt_aprov_gestor") == "nao"){
				if(isNullOrEmpty(form, "txt_justificativa_gestor")) msg += "<br /> - " + i18n.translate("aprovacaoGestor.justificativa");	
			}
		}
	}

	else if(ATIV_ATUAL == ATV_APROV_FINANC){
		if(isNullOrEmpty(form, "txt_aprov_financ")){
			msg += "<br /> - " + i18n.translate("aprovacaoFinac.aprovacao");
		} else{
			if(form.getValue("txt_aprov_financ") == "nao"){
				if(isNullOrEmpty(form, "txt_justificativa_financ")) msg += "<br /> - " + i18n.translate("aprovacaoFinac.justificativa");			
			} else{
				if(isNullOrEmpty(form, "txt_cod_produto")) msg += "<br /> - " + i18n.translate("produto.codigo");
				if(isNullOrEmpty(form, "txt_descr_produto")) msg += "<br /> - " + i18n.translate("produto.descricao");
				if(isNullOrEmpty(form, "txt_tp_produto")) msg += "<br /> - " + i18n.translate("produto.tipoProduto");	
			}
		}
	}
	
	if(msg != "") throw "Os seguintes campos são de preenchimento obrigatório: " + msg; 
}

function validarTbProdutos(form){
	var msg = "";
	
	var indexes = form.getChildrenIndexes("tb_produtos");
	
	if(indexes.length == 0){
		msg += "<br />- " + i18n.translate("alert.aprovador.linhaObrigatoria");
	} else{
		for (var i = 0; i < indexes.length; i++) {			
			if(isNullOrEmpty(form, "txt_produto___" + indexes[i])) msg += "<br /> - Linha " + (i+1) + ": " + i18n.translate("dadosProduto.produto");
			if(isNullOrEmpty(form, "txt_quantidade___" + indexes[i])) msg += "<br /> - Linha " + (i+1) + ": " + i18n.translate("dadosProduto.quantidade");
			if(isNullOrEmpty(form, "txt_valor_unitario___" + indexes[i])) msg += "<br /> - Linha " + (i+1) + ": " + i18n.translate("dadosProduto.valorUnitario");
	    }
	}
	
	return msg;
}

function isNullOrEmpty(form, inputName){
	if(form.getValue(inputName) == "" || form.getValue(inputName) == null){
		return true;
	}
	
	return false;
}
