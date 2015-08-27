var SSTestData = {};
function getSingleSeriesJSONDataModel() {
	var testdata = [];
	var date = new Date();
	var currentYear = date.getFullYear();
	var i;
	for(i = currentYear - 120; i < currentYear; i++) {
		var rev = 500000 + (Math.random() * 200000);
		testdata.push({
			year : i,
			revenue: rev,
			cost: 500000 - (Math.random() * 110000),
		});
	}

	SSTestData = {mydata : testdata};
	console.log(testdata.length);
	console.log(testdata);
	var model = new sap.ui.model.json.JSONModel();
	model.setData(SSTestData);
	model.setSizeLimit(100);
	return model;
}

