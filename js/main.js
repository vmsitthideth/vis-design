$(function() {

	// d3.csv('data/antibiotics_data.csv', function(error, data) {
	// 	console.log(data);

	// 	// function unpack(rows, key) {
	// 	// 	return rows.map(function(row) {
	// 	// 		return row[key];
	// 	// 	});
	// 	// }

	// 	var data1= [
	// 		{
	// 			type: 'bar',
	// 			x: ['giraffes', 'orangutans'],
	// 			y: [20,14]
	// 		}
	// 	];
	// 	Plotly.newPlot('graphOne', data1);

	// 	var data2= [
	// 		{
	// 			type: 'bar',
	// 			x: ['dogs', 'cats'],
	// 			y: [20,14]
	// 		}
	// 	];
	// 	Plotly.newPlot('graphTwo', data2);

	// 	var data3= [
	// 		{
	// 			type: 'bar',
	// 			x: ['bats', 'trees'],
	// 			y: [20,14]
	// 		}
	// 	];
	// 	Plotly.newPlot('graphThree', data3);
	// });

	function makePlot() {
		Plotly.d3.csv('data/antibiotics_data.csv', function(data) {
			processData(data)
		});
	};

	function processData(all) {
		console.log(all);
		var x = [],
			y = [];

		makeGraphOne(all,x,y,'graphOne');
		// for (var i = 0; i < all.length; i++) {
		// 	row = all[i];
		// 	x.push(row['Bacteria ']);
		// 	console.log(x[i]);
		// 	y.push(row['Penicilin']);
		// }
		// makePlotly(x,y);
	}

	function makeGraphOne(all, x, y, graph) {
		for (var i = 0; i < all.length; i++) {
			row = all[i];
			x.push(row['Bacteria ']);
			console.log(x[i]);
			y.push(row['Penicilin']);
		}
		makePlotly(x,y,graph);
	}

	function makePlotly(x, y, graph) {
		var traces = [{
			x: x,
			y: y
		}];

		Plotly.newPlot(graph, traces)
	};
	makePlot();
});