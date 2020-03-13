<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.helloedit')}</h1>
	
	<div class="row">
		<div class="col-md-6">
			<input class="form-control" id="colorpicker-example-generic" type="text" name="colorpicker-example-generic" value="#58595B" />
		</div>
		
		<div class="col-md-6">
			<button type="button" class="btn btn-info" data-salvarPreferencias>Salvar</button>
		</div>
	</div>
	
</div>
