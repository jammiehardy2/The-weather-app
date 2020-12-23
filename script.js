var currentTemperature = document.getElementById("Current Temperature");
var currentHumidity = document.getElementById("Humidity");
var currentWindSpeed = document.getElementById("Wind Speed");
var currentUVIndex = document.getElementById("UV Index");
var searchBTN= document.getElementById("search");
var inputtext = document.getElementById("input");
var currentDay = moment().format('L'); 
var searchCity = [];

function getWeather(searchBTN) {
  let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBTN + "&appid=d7a2fff6bee0f04ed93e526c04cc5132";

  $.ajax({
    url:queryURL,
    method:"GET",
}).then(function(response){

  console.log(response);
  
  var weathericon= response.weather[0].icon;
  var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
 
  var date=new Date(response.dt*1000).toLocaleDateString();
  
  $(searchCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
  

  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(currentTemperature).html((tempF).toFixed(2)+"&#8457");
  // Humidity
  $(currentHumidty).html(response.main.humidity+"%");
  //Wind and change to MPH
  var ws=response.wind.speed;
  var currentWindSpeed=(ws*2.237).toFixed(1);
  $(currentWindSpeed).html(WindSpeed+"MPH");
 
  UVIndex(response.coord.lon,response.coord.lat);
  forecast(response.id);
  if(response.cod==200){
      sCity=JSON.parse(localStorage.getItem("usertextcity"));
      console.log(searchCity);
      if (searchCity==null){
        searchCity=[];
        searchCity.push(city.toUpperCase()
          );
          localStorage.setItem("usertextcity",JSON.stringify(searchCity));
          addToList(searchCity);
      }
      else {
          if(find(usertextcity)>0){
              sCity.push(usertextcity.toUpperCase());
              localStorage.setItem("cityname",JSON.stringify(searchCity));
              addToList(usertextcity);
          }
      }
  }

});
}

  
      
     //$(document).ready(function (searchCity) { 
      //$(".btn btn-primary").click(function);{
      //console.log(usertext)
      //localStorage.setItem.on (click saveBtn);
      function getItems() {
        if (localStorage.getItem('input') !== null) {
            var mySearch = JSON.parse(localStorage.getItem('input'));
            
    
    
            for (var i = 0; i < mySearch.length; i++) {
                let displayDiv = $('<search>');
                displayDiv.addClass("searchBTN");
                displayDiv.text(searchBTN[i]);
                displayDiv.attr('value', searchBTN[i]);
                $("History").append(displayDiv);
                
            }
          } 
        }
      }
    //});

    //saveText.addEventListener("click", function (event) {
      //console.log("test");
     apiKey = "d7a2fff6bee0f04ed93e526c04cc5132"
     queryURL = https://api.openweathermap.org/data/2.5/forecast? + apiKey 
     queryURL = http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}+ apiKey 


    //localStorage.setItem.on (click saveBtn); 
    //<img src="" alt=""> Add after card title lines
    //$("button").click(getdate);
    //});
    //.saveBtn {
    // border-left: 1px solid black;
    //border-top-right-radius: 15px;
     // border-bottom-right-radius: 15px;
    //  background-color: #06AED5;
     // color: white;
    //}
    
    //.saveBtn i:hover {
    //  font-size: 20px;
     //transition: all .3s ease-in-out;
    //}
    //.time-block{
     // text-align: center;
     // border-radius: 15px;
    //}
});
