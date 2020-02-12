function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("pais");
	dataset.addColumn("sigla");
	
	dataset.addRow(new Array("Brasil", "BR"));
	dataset.addRow(new Array("México", "MX"));
	dataset.addRow(new Array("Argentina", "AR"));
	dataset.addRow(new Array("Chile", "CL"));
	dataset.addRow(new Array("Uruguai", "UY"));

	return dataset;
	
}function onMobileSync(user) {

}