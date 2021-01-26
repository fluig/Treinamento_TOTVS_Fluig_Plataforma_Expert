$("document").ready(function(){
	
	$("#txt_cep").on("blur", function(){
		buscarCEP();
	});
	
});


function buscarCEP(){
	
	var cep = $("#txt_cep").val().replace("-","");
	
	if(cep.length == 8){
		var loading = FLUIGC.loading(window);

		loading.show();

		$.ajax({
		    url: "https://viacep.com.br/ws/"+cep+"/json/",
		    method: 'GET',
		    async: true,
		    success: function ( response ) {
		    	if(response.erro == true){
		    		addErroCEP();
		    	} else {
		    		addSucessoCEP(response);
		    	}
		    	loading.hide();
		    },
		    error: function () {
		    	FLUIGC.toast({
		    		title:'',
		    		message:'Aconteceu um erro ao buscar o CEP',
		    		type:'danger'
		    	});
		    	loading.hide();
		    }
		});
	} else{
		addErroCEP();
	}
}

function addErroCEP(){
	$("#div_cep").addClass("has-error");
	$("#helpCEP").text("Digite um CEP válido.");
	
	$("#txt_endereco").val("");
	$("#txt_cd_municipio").val("");			    	
	$("#txt_municipio").val("");
}

function addSucessoCEP(response){
	$("#div_cep").removeClass("has-error");
	$("#helpCEP").text("");
	
	$("#txt_endereco").val(response.logradouro);
	$("#txt_cd_municipio").val(response.uf);			    	
	$("#txt_municipio").val(response.localidade);
}
