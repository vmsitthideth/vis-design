$(function() {

	d3.csv('data/antibiotics_data.csv', function(error, data) {
		console.log(data);

		// function unpack(rows, key) {
		// 	return rows.map(function(row) {
		// 		return row[key];
		// 	});
		// }

		var data1= [
			{
				type: 'bar',
				x: ['giraffes', 'orangutans'],
				y: [20,14]
			}
		];
		Plotly.newPlot('graphOne', data1);

		var data2= [
			{
				type: 'bar',
				x: ['dogs', 'cats'],
				y: [20,14]
			}
		];
		Plotly.newPlot('graphTwo', data2);

		var data3= [
			{
				type: 'bar',
				x: ['bats', 'trees'],
				y: [20,14]
			}
		];
		Plotly.newPlot('graphThree', data3);
	});
});