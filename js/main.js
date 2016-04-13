$(function() {

	d3.csv('data/antibiotics_data.csv', function(error, data) {
		console.log(data);

		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
		}
	});
});