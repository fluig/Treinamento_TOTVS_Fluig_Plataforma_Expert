var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
        var _this = this;
        
        if(WCMAPI.isEditMode == "false"){
        	_this.carregarGrafico();
        } else{
        	_this.iniciarColorPick();
        }
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'salvarPreferencias': ['click_salvar']
        },
        global: {}
    },
 
    carregarGrafico: function() {
    	var _this = this;

    	var chart = FLUIGC.chart('#dash_workflow_' + _this.instanceId, {
    	    width: '700',
    	    height: '600',
    	});
    	
    	var dataset = DatasetFactory.getDataset("fluig_resumo_tarefas", null, null, null);
     	
    	var colunas = [];
    	var dados = [];
    	var count = 0;

    	for(var key in dataset.values[0]){
    	     colunas[count] = key;
    	     dados[count] = dataset.values[0][key];
    	     count++;
    	}
    	
    	var data = {
		    labels: colunas,
		    datasets: [
		        {
		            label: "My Second dataset",
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: dados
		        }
		    ]
		};	
    	
    	var options = {
    		datasetStroke: true,
    		bezierCurve: false
    	}
    	
    	// call the line function
    	var lineChart = chart.line(data, options);
    },
    
    salvar: function(){
    	var _this = this;
    	
		var corInput = $("#colorpicker_" + _this.instanceId).val();
		
		var preferences = {
		    cor: corInput
		};
		  
		WCMSpaceAPI.PageService.UPDATEPREFERENCES({
		    async: true,
		    success: function (data) {
	    	    FLUIGC.toast({
    		        title: '',
    		        message: 'Preferencias salvas com sucesso.',
    		        type: 'success'
    		    });
		    },
		    fail: function (xhr, message, errorData) {
		    	FLUIGC.toast({
    		        title: '',
    		        message: 'Erro ao salvar preferencias.',
    		        type: 'error'
    		    });
		    }
		}, this.instanceId, preferences);
    },
    
    iniciarColorPick: function(){
    	var _this = this;
    	
    	var settings = {
		    changeDelay: 200,
		    control: 'wheel',
		    defaultValue: '#58595b',
		    inline: false,
		    letterCase: 'lowercase',
		    opacity: true,
		    position: 'bottom left',
		    customColorNames: {
		        'mycustomcolor': '#123456'
		    }
		}
		var myColorPicker = FLUIGC.colorpicker("#colorpicker_" + _this.instanceId, settings);
    }

});

