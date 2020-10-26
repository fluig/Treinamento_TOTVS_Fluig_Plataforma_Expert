/*
* Documentação do JQUERY MASK: https://plugins.jquery.com/mask/
*/

$(document).ready(function (){
	$(".obrigatorio").append("<span>*</span>");
});


function setSelectedZoomItem(selectedItem) {              
	var obj = selectedItem.inputName;
	
	if(obj == "txt_pais_unidade"){
		var inputName = "txt_estado_unidade";
		var filterValues = "";
		
		var codPais = selectedItem.sigla;
		
		filterValues += "filtroPais," + codPais;
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}

function removedZoomItem(removedItem) {
	var obj = removedItem.inputName;
	
	if(obj == "txt_pais_unidade"){
		var inputName = "txt_estado_unidade";
		var filterValues = "";
		filterValues += "filtroPais,";
		reloadZoomFilterValues(inputName, filterValues);
		window["txt_estado_unidade"].clear();
	}
}

function calcTotal(obj){
	var inputName = obj.name;
	
	// Pegar o numero da linha
	var index = inputName.split("___")[1];
	
	var qtd = $("#txt_quantidade___"+index).val();
	var valUni = $("#txt_valor_unitario___"+index).val();
	
	// Verificar se os 2 campos estão preenchidos
	if(qtd.trim().length >= 1 && valUni.trim().length >= 1){
   
		// Formatar o valor para fazer a multiplicação 
		var formatValor = parseFloat(valUni.replace(".", "")); // Retirar o ponto (.)
        var formatQtd = parseFloat(qtd);
        
        // 1º Multiplicar quantidade e valor
        // 2º Formatar em 2 casas decimais 
		var total = (formatQtd * formatValor).toFixed(2);
        $("#txt_valor_total___"+index).val(total);
    } else{
    	 $("#txt_valor_total___"+index).val("");
    }
	
	// Aplicar a mascara no campo valor total
	$("#txt_valor_total___"+index).mask('#.##0,00', {reverse: true});
}

function adicionarLinha(){
	var index = wdkAddChild("tb_produtos");
	
	$("#txt_valor_unitario___"+index).mask('#.##0,00', {reverse: true});
}