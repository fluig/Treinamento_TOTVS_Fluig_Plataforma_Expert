function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    log.info("---- Constraint recebida ----");
    log.dir(constraints);
    
    var codPais = null;
    
    for(var i=0; i<constraints.length; i++){
    	if(constraints[i].fieldName == "filtroPais"){
    		codPais = constraints[i].initialValue; 
    	}    	
    }
    
    log.info("Valor a ser filtrado: " + codPais);
    
    dataset.addColumn("estado");
    dataset.addColumn("sigla");
    
    if(codPais == "BR"){
    	dataset.addRow(new Array("São Paulo", "BR"));
    } else if(codPais == "MX"){
    	dataset.addRow(new Array("Veracruz", "MX"));
    } else if(codPais == "AR"){
    	dataset.addRow(new Array("Buenos Aires", "AR"));	
    } else if (codPais == "CL") {
    	dataset.addRow(new Array("Santiago", "CL"));	
	} else if (codPais == "UY") {
		dataset.addRow(new Array("Montevidéu", "UY"));	
	}
    
    return dataset;
}
function onMobileSync(user) {

}