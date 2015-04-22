$(document).on('ready', function(){
	
	// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20827359/summary/
	// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=<key>
	var url;
	var base_url = "https://na.api.pvp.net/api/lol/";
	var API_KEY = "?api_key=7b52d012-93d1-43b9-b84d-c8420a3824f9";
	var input_val;
	//var summoner, region;

	// grab the id from the input in focus
	// can use in future implementations with .keyup
	// var id;
	// $(":input").focus(function () {
	//      id = this.id;
	// });
	// $('.form-control').keyup(function(){
	
	// });

	$('#btn-submit').on('click', function(e){
		e.preventDefault();
		var summoner_id;
		var summoner = $("#summoner-field").val().replace(/\s+/g, '');
		//console.log(summoner);
		
		// base_url + region + '/v1.4/summoner/by-name/' + summoner + API_KEY;
		url = base_url + 'na/v1.4/summoner/by-name/' + summoner + API_KEY;
		//console.log(url);
		get_sum_id(url);
	});

	// Get the summoner id based on the summoner name that the user searchs.
	// param: api url to pass to ajax method
	// return: summoner id
	function get_sum_id(url){
		$.ajax({
			method: 'get',
			dataType: 'json',
			url: url,
			success: function(data){
				console.log(data[0]);
			},
			error: function(error){
				console.log(error);
			}
		});
	};
});