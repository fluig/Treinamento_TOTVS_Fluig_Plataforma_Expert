
function setSelectedZoomItem(selectedItem) {
	
    var obj = selectedItem.inputName;

	if(obj == "txt_paisUnidade"){
		var inputName= "txt_estadoUnidade";
		var filterValues = "filtroEstado," + selectedItem.sigla;
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}

function removedZoomItem(removedItem) {
	var obj = removedItem.inputName;
	
	if(obj == "txt_paisUnidade"){
		window["txt_estadoUnidade"].clear();
		var inputName= "txt_estadoUnidade";
		var filterValues = "filtroEstado,";
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}

function calcTotal(obj){
	var id = $(obj)[0].id;

	var index = id.split("___")[1];

	var qtd = $("#txt_quantidade___"+index).val();
    var val_un = $("#txt_valor_unitario___"+index).val();
    
    if(!isNaN(qtd) && !isNaN(val_un) && qtd != "" && val_un != ""){
        $("#txt_total___"+index).val(parseInt(qtd) * parseInt(val_un));
    }

    var camposTotal = $("[name^='txt_total___']:visible");
    var totalCamposTotal = camposTotal.length;
    
    var totalCompra = 0;
    for(var i=0; i < totalCamposTotal; i++){
    	var total = $(camposTotal)[i].value;
    	if(!isNaN(total) && total != ""){
            totalCompra += parseInt($(camposTotal)[i].value);    		
    	}
    }

    $("#txt_totalCompra").val(totalCompra);    
}