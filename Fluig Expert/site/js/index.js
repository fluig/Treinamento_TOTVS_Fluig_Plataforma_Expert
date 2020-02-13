var htmlProjectTitle = 'Fluig Expert - Fluig Documental Process Site';
var projectHeaderString = 'Fluig Expert - Fluig Documental Process Site';

var allProcessArray = Properties("criacao_area,criacao_area.png|solicitacao_compras,solicitacao_compras.png");

function Properties(props) {
	var PropertiesArray = new Array();
	var propsArray = props.split('|');
	$.each(propsArray, function(index, value) { 
		var prop = value.split(',');
		var PropertiesObject = new Object();
		PropertiesObject.id = prop[0];
		PropertiesObject.image = prop[1]; 
		PropertiesArray.push(PropertiesObject);
	});
	return PropertiesArray;
}

$(document).ready(function() {
	document.title = htmlProjectTitle;
	document.getElementById("project-header").getElementsByTagName("h1")[0].textContent = projectHeaderString;

	/*
	* Alterando o html
	*
	*/

	var diagramsDiv = document.getElementById("process-diagrams");
	$.each(allProcessArray, function(index, value) { 
 		var newProcessDiv = document.createElement('div');
		newProcessDiv.setAttribute('class', 'boxgrid caption');
		
		var newProcessDivHtml = '<a href="' + value.id + '.htm"><img src="thumbs/' + value.image + '" width="350"/></a>'
				      + '<div class="cover boxcaption"><a href="' + value.id + '.htm"><h3>' + value.id + '</h3></a><p></p></div>';
		newProcessDiv.innerHTML = newProcessDivHtml;
		diagramsDiv.appendChild(newProcessDiv);
	});	

	$('.boxgrid.slidedown').hover(function() {
		$(".cover", this).stop().animate({ top: '-260px' }, { queue: false, duration: 300 });
	}, function() {
		$(".cover", this).stop().animate({ top: '0px' }, { queue: false, duration: 300 });
	});

	$('.boxgrid.caption').hover(function() {
		$(".cover", this).stop().animate({ top: '92px' }, { queue: false, duration: 300 });
	}, function() {
		$(".cover", this).stop().animate({ top: '170px' }, { queue: false, duration: 300 });
	});
});

