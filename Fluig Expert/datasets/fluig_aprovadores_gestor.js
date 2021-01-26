function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    
    
    var dataset = DatasetBuilder.newDataset();
    
    //Cria as colunas
    dataset.addColumn("nome_aprovador");
    dataset.addColumn("codigo_aprovador");
    dataset.addColumn("dt_atualizacao");

    //Cria a constraint para buscar os formulários ativos
    var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
    var constraints = new Array(cst);
     
    var datasetPrincipal = DatasetFactory.getDataset("fluig_form_gestores", null, constraints, null);
     
    for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
        var documentId = datasetPrincipal.getValue(i, "metadata#id");
        var documentVersion = datasetPrincipal.getValue(i, "metadata#version");
         
        //Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
        var c1 = DatasetFactory.createConstraint("tablename", "tb_aprovadores" ,"tb_aprovadores", ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
        var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
        var constraintsFilhos = new Array(c1, c2, c3);
 
        //Busca o dataset
        var datasetFilhos = DatasetFactory.getDataset("fluig_form_gestores", null, constraintsFilhos, null);
 
        for (var j = 0; j < datasetFilhos.rowsCount; j++) {
            //Adiciona os valores nas colunas respectivamente.
            dataset.addRow(
            	new Array(
                    datasetFilhos.getValue(j, "txt_nome_aprovador"),
                    datasetFilhos.getValue(j, "txt_cod_aprovador"),
                    datasetPrincipal.getValue(i, "txt_data_atualizacao")
                )
            );
        }
    }
     
    return dataset;
}
function onMobileSync(user) {

}