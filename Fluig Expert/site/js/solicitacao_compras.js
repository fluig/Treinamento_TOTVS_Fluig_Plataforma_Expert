var htmlTitle = 'solicitacao_compras - Fluig Documental Process Site';
var headerString = 'Fluig Expert - Fluig Documental Process Site';
var selectedTab = 1;

var currentProcess = Properties("id,solicitacao_compras|name,solicitacao_compras|version,6");
var processImageName = 'solicitacao_compras.png';

var propsLabel = Properties("id,Código|name,Nome|color,Cor:|version,Versão:|author,Autor|subprocessid,Subprocesso");


var componentList = new Array();
componentList.push(Component('rect','230.0,378.0,991.0,523.0','SwimLane','type.swim.lane.png',Properties("id,bpmnswimlane6|name,Financeiro")));
componentList.push(Component('circle','327.5,157.5,17.5','Inicial','startnormal.png',Properties("id,startevent2|name,Início")));
componentList.push(Component('rect','400.0,270.0,506.0,340.0','Atividade','tasknormal.png',Properties("id,task3|name,Aprovação Gestor")));
componentList.push(Component('rect','560.0,430.0,666.0,500.0','Atividade','tasknormal.png',Properties("id,task7|name,Aprovação Financeiro")));
componentList.push(Component('rect','710.0,570.0,816.0,640.0','Serviço','taskservice.png',Properties("id,servicetask9|name,Integração Protheus")));
componentList.push(Component('rect','720.0,160.0,826.0,216.0','Atividade','tasknormal.png',Properties("id,task13|name,Correção")));
componentList.push(Component('circle','931.5,661.5,17.5','Link','intermediatelink.png',Properties("id,intermediatelink14|name,Enviar para solicitante")));
componentList.push(Component('circle','657.5,187.5,17.5','Recebimento Link','intermediatelinkreceive.png',Properties("id,intermediatelinkreceive16|name,Intermediário")));
componentList.push(Component('circle','917.5,567.5,17.5','Final','endnormal.png',Properties("id,endevent21|name,Fim")));
componentList.push(Component('rect','423.0,414.0,483.0,516.0','Exclusivo','gatewayexclusive.png',Properties("id,exclusivegateway23|name,Aprovado?")));
componentList.push(Component('circle','357.5,464.5,17.5','Final','endnormal.png',Properties("id,endevent26|name,Reprovado Gestor")));
componentList.push(Component('rect','583.0,554.0,643.0,656.0','Exclusivo','gatewayexclusive.png',Properties("id,exclusivegateway28|name,Exclusivo")));
componentList.push(Component('circle','507.5,604.5,17.5','Final','endnormal.png',Properties("id,endevent31|name,Reprovado Financeiro")));
componentList.push(Component('circle','825.0,645.0,15.0','Captura de Erro','intermediateerror.png',Properties("id,intermediateerror19|name,Intermediário")));
componentList.push(Component('rect','230.0,522.0,991.0,691.0','SwimLane','type.swim.lane.png',Properties("id,swimlane10|name,Integração")));
componentList.push(Component('rect','230.0,234.0,991.0,379.0','SwimLane','type.swim.lane.png',Properties("id,swimlane5|name,Gestor")));
componentList.push(Component('rect','230.0,90.0,991.0,235.0','SwimLane','type.swim.lane.png',Properties("id,swimlane1|name,Solicitante")));


var processList = new Array();
processList.push(Properties("id,criacao_area|name,criacao_area"));
processList.push(Properties("id,solicitacao_compras|name,solicitacao_compras"));


var dataNames = function() {
	var names = currentProcess.name;
	if(names) {
		$.each(componentList, function(index, value) { 
	 		 names = names.concat('|' + value.name);
		});
	} else {
		names = new String();
	}
	return names;
};

function Properties(props) {
	var PropertiesObject = new Object();
	PropertiesObject.propNames = new Array();
	var propsArray = props.split('|');
	$.each(propsArray, function(index, value) { 
		var prop = value.split(',');
		PropertiesObject[prop[0]] = prop[1]; 
		PropertiesObject.propNames.push(prop[0]);
	});
	return PropertiesObject;
}

function Component(type, points, title, image, properties) {
	ComponentObject = properties;
	ComponentObject['points'] = points;
	ComponentObject['type'] = type;
	ComponentObject['title'] = title;	
	ComponentObject['image'] = image;	
	return ComponentObject;	
}

function getSubProcessId(name) {
	var subProcessId = new String();
	$.each(processList, function(index, process) { 
		if (process.name === name) {
			subProcessId = process.id;
		}
	});
	return subProcessId;
}

$(function($) {
	document.title = htmlTitle;
	$("#q").Watermark('Search');
});

$(document).ready(function() {
	document.getElementById("image-header").getElementsByTagName("h1")[0].textContent = headerString;

	/*
	* Alterando html
	* 
	*/
	// Titulo do Processo
	document.getElementById("diagram-title").innerHTML = '<a href="#' + currentProcess.id + '" class="diagelem"><h2>' + currentProcess.name + '</h2></a>';

	// lista de abas
	var liNodes = new String();
	$.each(processList, function(index, value) { 
		if (value.id == currentProcess.id) {
			liNodes = liNodes.concat('<li class="i-state-default ui-corner-top ui-state-active ui-tabs-selected">');
			liNodes = liNodes.concat('<a href="#tabs-0" title="tabs-0">' + value.id + '</a></li>');
		} else {
			liNodes = liNodes.concat('<li class="i-state-default ui-corner-top">');
			liNodes = liNodes.concat('<a href="' + value.id + '.htm" title="tabs-' + (index + 1)  + '">' + value.id + '</a></li>');
		}
	});

	document.getElementById("tab-list").innerHTML = liNodes;

	// Div Processo
	var currentProcessDiv = document.getElementById("current-process-div");
	currentProcessDiv.setAttribute("id", currentProcess.id + "_doc");
	currentProcessDiv.setAttribute("title", currentProcess.name);

	var currentProcessDivHtml = '<a name="' + currentProcess.id + '" id="' + currentProcess.id + '"></a>';	
	$.each(currentProcess.propNames, function(index, value) { 
		currentProcessDivHtml = currentProcessDivHtml.concat('<h4>' + ( propsLabel[value] || value )+'</h4>');		
		currentProcessDivHtml = currentProcessDivHtml.concat('<p>' + currentProcess[value] +'</p>');
	});

	currentProcessDiv.innerHTML = currentProcessDivHtml;

	//Div Componentes e Mapping
	var mapNode = document.getElementById("map");
	var areaNode = mapNode.getElementsByTagName("area")[0];

	$.each(componentList, function(index, value) { 
 		var newComponentDiv = document.createElement('div');
		newComponentDiv.setAttribute('id', value.id + "_doc");
		newComponentDiv.setAttribute('class', currentProcessDiv.getAttribute('class'));
		newComponentDiv.setAttribute('title', value.title);	
		
		var newComponentDivHtml = '<a name="' + value.id + '" id="' + value.id + '"></a>';
		newComponentDivHtml = newComponentDivHtml.concat('<img id="componen-div-image" class="icon" src="images/' + value.image + '" border="0" />');			

		$.each(value.propNames, function(indexAux, valueAux) { 
			newComponentDivHtml = newComponentDivHtml.concat('<h4>' + ( propsLabel[valueAux] || valueAux ) +'</h4>');	
			if (valueAux === 'subprocessid') {
				var subProcessId = getSubProcessId(value[valueAux]);
				newComponentDivHtml = newComponentDivHtml.concat('<p><span class="InLinkBtn"><a href="' + subProcessId + '.htm">' + subProcessId + '</a></span></p>');
			} else {
				newComponentDivHtml = newComponentDivHtml.concat('<p>' + value[valueAux].replace(/\n/gi, '<br/>') +'</p>');
			}
		});	

		newComponentDiv.innerHTML = newComponentDivHtml;
		document.getElementById("documentation").appendChild(newComponentDiv);
		
		var newAreaNode = areaNode.cloneNode(false)
		newAreaNode.setAttribute('shape', value.type);
		newAreaNode.setAttribute('coords', value.points);
		newAreaNode.setAttribute('title', value.name);
		newAreaNode.setAttribute('href', '#' + value.id);

		mapNode.appendChild(newAreaNode);
	});

	mapNode.removeChild(areaNode);

	// Imagem do Diagrama
	var imgNode = document.createElement('img');
	imgNode.setAttribute('src', 'thumbs/' + processImageName);
	imgNode.setAttribute('border', '0');
	imgNode.setAttribute('usemap', '#map');
	imgNode.setAttribute('class', 'map');
	
	document.getElementById("diagramimage").insertBefore(imgNode, mapNode);

	$("#tabs").tabs({
		selected: selectedTab, 
		select: function(event, ui) {
			var url = $.data(ui.tab, 'load.tabs');
			if (url) {
				location.href = url;
				return false;
			}
			return true;
		}
	});

	$("#tabs").tabs('paging');

	
	var arrayNames = new Array();

	$.each(componentList, function(index, value) { 
		arrayNames.push({"name":value.name, "id":value.id});
	});

	var data = dataNames().split('|');
	$("#q").autocomplete(arrayNames,
	{
		formatItem: function(row, i, max, term) {
			return ( row.name || "" );
		}
	}
	);
	$('#q').result(function(event, data, formatted) {
		var val = data.id;
		var anchor = '#' + val;
		var dia = anchor + '_doc';
		$(dia).dialog('open');
	});
	
	

	var minWidth = 610;
	if ($(".docelem img").hasClass("imageForm")) {
		var width = $(".docelem .imageForm").width();
	} else {
		var width = minWidth;
	};
	$('.docelem').dialog({ 
		autoOpen: false, 
		width: (width + 30),
		height: 480, 
		modal: true,
		show: 'slide'
	});
	$('.docelem').dialog('option', 'minWidth', 640);

	$('.diagelem').click(function() {
		var t = $(this).attr('href');
		t = t.replace('#', '');
		var dia = $(this).attr('href') + '_doc';
		$(dia).dialog('open');
	});

	$(function() {
		$('.map').maphilight();
	});

});

