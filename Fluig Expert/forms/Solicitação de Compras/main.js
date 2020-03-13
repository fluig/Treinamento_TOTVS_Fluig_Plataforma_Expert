$(document).ready(function (){
	$(".obrigatorio").append("<span>*</span>");
});

function setSelectedZoomItem(selectedItem) {              
	var obj = selectedItem.inputName;
	
	console.log(selectedItem);
	
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

function calcTotal(obj) {
	var inputName = obj.name;
	
	var index = 0;
	
	index = inputName.split("___")[1];
	
	var qtd = $("#txt_quantidade___"+index).val();
	var valUni = $("#txt_valor_unitario___"+index).val();
	
	var total = qtd * valUni;
	
	$("#txt_valor_total___"+index).val(total);
}






