$(function() {
	//	function that reads the csv data in so that it can be used
	function makePlot() {
		Plotly.d3.csv('data/antibiotics_data.csv', function(data) {
			processData(data)
		});
	};

	function processData(all) {
		 console.log(all);

		//	calls each graph making functions
		//	passes the data in and the div id for the graph location
		makeGraphOne(all,'graphOne');
		makeGraphTwo(all,'graphTwo');
		makeGraphThree(all, 'graphThree');
	}

	//	function that creates the first bar graph through Plotly
	function makeGraphOne(all, graphName) {
		var x = [],
			y = [];
		for (var i = 0; i < all.length; i++) {
			row = all[i];
			x.push(row['Bacteria ']);
			y.push(row['Penicilin']);
		}

		var data = [{
			x: x,
			y: y,
			type: 'bar'
		}];

		var layout = {
			yaxis: {
				title: 'Amount of Penicilin Used'
			},
			title: 'Amount of Penicilin Per Bacteria'
		};
		Plotly.newPlot(graphName, data, layout, {staticPlot: true});
	}

	//	function that creates the second graph through Plotly
	function makeGraphTwo(all, graphName) {
		var x = [],
			y = [],
			pos = 0,
			neg = 0;
		for (var i = 0; i < all.length; i++) {
			row = all[i];
			if (row['Gram Staining '] == "positive") {
				pos++;
			} else {
				neg++;
			}
		}

		//	two variables are made for the two stacked bar graphs
		var trace1 = {
			x: ['Gram Staining'],
			y: [pos],
			name: 'Positive',
			type: 'bar'
		};

		var trace2 = {
			x: ['Gram Staining'],
			y: [neg],
			name: 'Negative',
			type: 'bar'
		};
		var data = [trace1, trace2];
		var layout = {
			yaxis: {
				title: '# of Gram Staining'
			},
			title: 'Number of Gram Staining Per Bacteria',
			barmode: 'stack'};

		Plotly.newPlot(graphName, data, layout, {staticPlot: true});
	}

	function makeGraphThree(all, graphName) {
		var bacteria = [],
			penicilin = [],
			streptomycin = [],
			neomycin = [];

		for (var i = 0; i < all.length; i++) {
			row = all[i];
			bacteria.push(row['Bacteria ']);
			penicilin.push(row['Penicilin']);
			streptomycin.push(row['Streptomycin ']);
			neomycin.push(row['Neomycin']);
		}

		var data1 = {
			x: bacteria,
			y: penicilin,
			name: 'Penicilin',
			type: 'bar'
		};
		var data2 = {
			x: bacteria,
			y: streptomycin,
			name: 'Streptomycin',
			type: 'bar'
		};
		var data3 = {
			x: bacteria,
			y: neomycin,
			name: 'Neomycin',
			type: 'bar'
		};

		var data = [data1, data2, data3];

		var layout = {
			title: 'Minimum Inhibitory Concentration Per Bacteria',
			barmode: 'group'};

		Plotly.newPlot(graphName, data, layout, {staticPlot: true});
	}
	makePlot();
});