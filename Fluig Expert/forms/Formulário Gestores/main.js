$(document).ready(function (){
	$(".obrigatorio").append("<span>*</span>");
});

function setSelectedZoomItem(selectedItem) {              
	
	var codigoUsuario = selectedItem.colleagueId;
	var inputName = selectedItem.inputName;
	
	var index = 0;
	
	index = inputName.split("___")[1];
	
	$("#txt_cod_aprovador___"+index).val(codigoUsuario);
	
}

function removedZoomItem(removedItem) {

	var inputName = removedItem.inputName;
	
	var index = 0;
	
	index = inputName.split("___")[1];
	
	$("#txt_cod_aprovador___"+index).val("");
}

function excluirLinha(oElement){
    fnWdkRemoveChild(oElement);    
}

function adicionarLinha(){
	wdkAddChild("tb_aprovadores");
}