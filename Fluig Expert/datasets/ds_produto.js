function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("id");
	dataset.addColumn("nome");
	
	dataset.addRow(new Array("1", "Ar condicionado"));
	dataset.addRow(new Array("2", "Impressora"));
	dataset.addRow(new Array("3", "Monitor"));
	dataset.addRow(new Array("4", "Notebook"));
	dataset.addRow(new Array("5", "Mesa"));

	return dataset;

}function onMobileSync(user) {

}