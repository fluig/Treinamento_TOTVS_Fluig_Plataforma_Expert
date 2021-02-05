function defineStructure() {

}

function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("Tipo");
    dataset.addColumn("Descricao");

    dataset.addRow(new Array("F", "Cons. Final"));
    dataset.addRow(new Array("L", "Produtor Rural"));
    dataset.addRow(new Array("R", "Revendedor"));
    dataset.addRow(new Array("S", "Solidario"));
    dataset.addRow(new Array("X", "Exportação"));

    return dataset;
}

function onMobileSync(user) {

}