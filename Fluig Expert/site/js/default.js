${htmlProjectTitle};
${projectHeaderString};

${processIds}
var allProcessArray = processIds.split(',');

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
		
		var newProcessDivHtml = '<a href="' + value + '.htm"><img src="thumbs/' + value + '.png" width="350"/></a>'
				      + '<div class="cover boxcaption"><a href="' + value + '.htm"><h3>' + value + '</h3></a><p></p></div>';
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

