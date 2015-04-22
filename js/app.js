// WIP
// author: Bryden Fogelman
$(document).on('ready', function(){
	
	// EXAMPLES
	// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20827359/summary/
	// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=<key>

	// Globals
	var API_KEY = "?api_key=7b52d012-93d1-43b9-b84d-c8420a3824f9";
	var base_url = "https://na.api.pvp.net/api/lol/";
	// setting the base_url with the region
	//base_url = base_url + region

	$('#btn-submit').on('click', function(e){
		e.preventDefault();
		
		var url;
		var summoner = $("#summoner-field").val().replace(/\s+/g, '');
		var region = $("#region-field option:selected").val();
		console.log(region)
		//console.log(summoner);
		
		// base_url + region + '/v1.4/summoner/by-name/' + summoner + API_KEY;
		 // region instead of base url
		url = base_url + region + '/v1.4/summoner/by-name/' + summoner + API_KEY;
		//console.log(url);
		get_sum_id(url, summoner, get_stat);
	});

	/**
	* Gets the summoner id and then passes the id to the callback function.
	* @param api url to pass to ajax method, summoner
	* @callback get_stat
	*/
	function get_sum_id(url, summoner, callback){
		$.ajax({
			method: 'get',
			dataType: 'json',
			url: url,
			success: function(data){
				console.log(data[summoner].id);
				//return data[summoner].id
				get_stat(data[summoner].id)
			},
			error: function(error){
				console.log(error);
			}
		});
	};

	/**
	* Gets the stats of a summoner based on the summoner id.
	* @param summoner id
	* @callback 
	*/
	function get_stat(sum_id){
		var url = base_url + '/v1.3/stats/by-summoner/' + sum_id + '/summary/' + API_KEY;
		console.log(url)
		$.ajax({
			method: 'get',
			dataType: 'json',
			url: url,
			success: function(data){
				console.log(data);
				manage_summoner_stats(data);
			},
			error: function(error){
				console.log(error);
			}
		});
	};

	/**
	* Handles the json response from the summoner api stat request.
	* @param json object
	*/
	function manage_summoner_stats(json_response){
		// console.log(json_response["playerStatSummaries"]);
		//RankedSolo5x5
		var array = json_response["playerStatSummaries"];
		for(var index = 0; index < array.length; index++){
			var type = array[index].playerStatSummaryType;
			if(type === "RankedSolo5x5"){
				//aggregatedStats
				console.log(array[index])
			}
		}
	};
	// grab the id from the input in focus
	// can use in future implementations with .keyup
	// var id;
	// $(":input").focus(function () {
	//      id = this.id;
	// });
	// $('.form-control').keyup(function(){
	// });

});