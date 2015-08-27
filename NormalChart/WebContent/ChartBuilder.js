jQuery.sap.require("sap.m.MessageBox");

function createSSChart(id, title, model)
{
	/*
	// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "595px",
		type : sap.makit.ChartType.Column,
		showRangeSelector : false,
	    showTableView : false,
	    showTotalValue : false,
	    lineThickness : 2,
		categoryAxis: new sap.makit.CategoryAxis({displayLastLabel:true,displayAll:true}),
		category : new sap.makit.Category({
			column : "yearCategory",
			displayName : "Year"
		}),
		values : [new sap.makit.Value({
			expression : "revenueValue",
			format : "currency",
			displayName : "Revenue"
		})]
	});

	oChart.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));



	oChart.setType(sap.makit.ChartType.Line);
	oChart.setShowRangeSelector(true);
	oChart.getValueBubble().setVisible(false);
	  oChart.setType(sap.makit.ChartType.Line);
	  oChart.setShowRangeSelector(true);
	  oChart.setShowTotalValue(false);
	  oChart.setNumberOfVisibleCategories(117);
	oChart.setModel(model);
	oChart.bindRows("/mydata");

	//var oButton = generateConfigPopover(oChart);

	var oPage = new sap.m.Page(id);
	oPage.setShowHeader(false);

	
	var va = oChart.getValues()[0];
	va.setExpression("revenueValue");


	oPage.addContent(oChart);
	*/
	
	var oChart = new sap.makit.Chart({
	    width : "100%",
	    height : "595px",
	    showRangeSelector : false,
	    showTableView : false,
	    showTotalValue : false,
	    lineThickness : 2,
	    primaryColorPalette:["orange"],

	    categoryAxis: new sap.makit.CategoryAxis({displayLastLabel:true,displayAll:true}),
	    category : new sap.makit.Category({
			column : "yearCategory",
			displayName : "Year"
		}),
		values : [new sap.makit.Value({
			expression : "revenueValue",
			format : "currency",
			displayName : "Revenue"
		})]
	  });
	oChart.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	  oChart.getValueBubble().setVisible(false);
	  oChart.setType(sap.makit.ChartType.Line);
	  oChart.setShowRangeSelector(true);
	  oChart.setShowTotalValue(false);
	  oChart.setNumberOfVisibleCategories(117);
	  oChart.setModel(model);
	  console.log(model.getData());
	  oChart.bindRows("/mydata");

	  var va = oChart.getValues()[0];
	  va.setExpression("revenueValue");
	  
	  var oPage = new sap.m.Page(id);
		oPage.setShowHeader(false);

		
		var va = oChart.getValues()[0];
		va.setExpression("revenueValue");


		oPage.addContent(oChart);

	return oPage;
};