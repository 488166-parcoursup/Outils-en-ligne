$(document).ready(function(){

	//GEO ON CLICK
	$("#geo").on("click", function(){
	  	var long;
	  	var lat;
	  	var swap = true;
	  
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position) {

	      		lat = position.coords.latitude;
	      		lon = position.coords.longitude;
	      
	   			//API variable with geolocation
	      		var apiGeo = "https://api.openweathermap.org/data/2.5/weather?lat=" + "Paris" +   "&lang=fr&APPID=e6b88e356d8e6ddb4de648c62a1eaf63&units=imperial"
				  $.getJSON(apiGeo, function(data){
						//Call WEATHER APP API
			       	var description = data.weather[0].description;
					var tempFa = Math.floor(data.main.temp);
					var windSpeed = data.wind.speed;
					var city = data.name + ", " + data.sys.country;
					var tempCe = Math.floor((tempFa - 32) * .5556);
					var humidity = data.main.humidity;
					var icon = data.weather[0].icon;
					var tempMinF = Math.floor(data.main.temp_min)
					var tempMaxF = Math.floor(data.main.temp_max)
					var tempMinC = Math.floor((tempMinF - 32) * .5556)
					var tempMaxC = Math.floor((tempMaxF - 32) * .5556)
					var windSpeedKMn = Math.floor((windSpeed)* 1.61)
					var windSpeedKM = Math.round(windSpeedKMn * 100) / 100
		
					$("#input").val("").blur();
					$("#city").html(city);
					$("#tempFa").html(tempCe + " &#8451");
					$("#minMax").html(tempMinC + "/" + tempMaxC + " &#8451");
					$("#description").html(description);
					$("#windSpeed").html(windSpeedKM + " km/h");
					$("#humidity").html(humidity + "%");
					$("#icon").html("<img class=\"weather-icon \" src='http://openweathermap.org/img/wn/" + icon + ".png'>");
					$(".swap").html("<button>&#8451 </button>");
					$("#secondInfo").css("display", "grid");

					//CHANGING FROM F to C
					$(".swap").on("click", function(){
						if (swap === true){
							$(this).html("<button> &#8457 </button>")
							$("#tempFa").html(tempCe + " &#8451;");
							$("#minMax").html(tempMinC + "/" + tempMaxC + " &#8451;");
							$("#windSpeed").html(windSpeedKM + " km/h");
							swap = false;
						} else {
							$(this).html("<button>&#8451 </button>")
							$("#tempFa").html(tempFa + " &#8457;");
							$("#minMax").html(tempMinF + "/" + tempMaxF + " &#8457;");
							$("#windSpeed").html(windSpeed + " mph");
							swap = true;
						}
					})
			    });
	     	});
	  	}
	})

	$('input').on("keypress", function(event){    
	    if(event.keyCode===13){
    	   $('#search').trigger('click')

    	}
	});

	$("#search").on("click", function(){

		var input = $("#input").val()
		var apiInput = "https://api.openweathermap.org/data/2.5/weather?q=" + "Paris" + "&lang=fr&APPID=e6b88e356d8e6ddb4de648c62a1eaf63&units=imperial";
		var swap = true;

		$.getJSON(apiInput, function(data){
			var description = data.weather[0].description;
			var tempFa = Math.floor(data.main.temp);
			var windSpeed = data.wind.speed;
			var city = data.name + ", " + data.sys.country;
			var tempCe = Math.floor((tempFa - 32) * .5556);
			var humidity = data.main.humidity;
			var icon = data.weather[0].icon;
			var tempMinF = Math.floor(data.main.temp_min)
			var tempMaxF = Math.floor(data.main.temp_max)
			var tempMinC = Math.floor((tempMinF - 32) * .5556)
			var tempMaxC = Math.floor((tempMaxF - 32) * .5556)
			var windSpeedKMn = Math.floor((windSpeed)* 1.61)
			var windSpeedKM = Math.round(windSpeedKMn * 100) / 100

			$("#input").val("").blur();
			$("#city").html(city);
			$("#tempFa").html(tempCe + " &#8451");
			$("#minMax").html(tempMinC + "/" + tempMaxC + " &#8451");
			$("#description").html(description);
			$("#windSpeed").html(windSpeedKM + " km/h");
			$("#humidity").html(humidity + "%");
			$("#icon").html("<img class=\"weather-icon \" src='http://openweathermap.org/img/wn/" + icon + ".png'>");
			$(".swap").html("<button>&#8451 </button>");
			$("#secondInfo").css("display", "grid");


			//CHANGING FROM F to C
			$(".swap").on("click", function(){
				if (swap === true){
					$(this).html("<button> &#8457 </button>")
					$("#tempFa").html(tempFa + " &#8457;");
					$("#minMax").html(tempMinF + "/" + tempMaxF + " &#8457;");
					$("#windSpeed").html(windSpeed + " mph");
					swap = false;
				} else {
					$(this).html("<button>&#8451 </button>")
					$("#tempFa").html(tempCe + " &#8451;");
					$("#minMax").html(tempMinC + "/" + tempMaxC + " &#8451;");
					$("#windSpeed").html(windSpeedKM + " km/h");
					swap = true;
				}
			})
		});
	})
});

