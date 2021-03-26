var currentTemperature = document.getElementById("current-temp");
var currentHumidity = document.getElementById("current-humidity");
var currentWindSpeed = document.getElementById("current-wind");
var currentUVIndex = document.getElementById("current-uv");
var searchBTN = document.getElementById("search");
var inputtext = document.getElementById("input");
var currentDay = moment().format("");
var searchCity = [];
var apiKey = "d7a2fff6bee0f04ed93e526c04cc5132";

$(document).ready(function () {
  function getcurrentday(e) {
    e.preventDefault();
    let queryURL1 = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}`;
    console.log("Iamhere");
    $.ajax({
      url: queryURL1,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var date = new Date(response.dt * 1000).toLocaleDateString();
      $(searchCity).html(response.name + "(" + date + ")");
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      $(currentTemperature).html(tempF.toFixed(2) + "&#8457");
      // Humidity
      $(currentHumidity).html(response.main.humidity + "%");
      // //Wind and change to MPH
      var ws = response.wind.speed;
      var windSpeed = (ws * 2.237).toFixed(1);
      $(currentWindSpeed).html(windSpeed + "MPH");
      var uv = UVIndex(response.coord.lon, response.coord.lat);
      $(currentUVIndex).html(uv);
    });
  }
  $("#search-button").on("click", function () {
    debugger;
  });
});
// function getFiveDay (){

//   let queryURL =
//   "https://api.openweathermap.org/data/2.5/forecast?&units=" + "&units=imperial" + "&appid=d7a2fff6bee0f04ed93e526c04cc5132=" + city;

//   console.log(response);
//   $.ajax({
//     url:queryURL,
//     method:"GET",
// })
// .then(function(response){

//    forecast(response.id);
//    if(response.cod==200){
//       sCity=JSON.parse(localStorage.getItem("usertextcity"));
//       console.log(searchCity);
//       if (searchCity==null){
//         searchCity=[];
//         searchCity.push(city.toUpperCase()
//           );
//           localStorage.setItem("usertextcity",JSON.stringify(searchCity));
//           addToList(searchCity);
//       }
//       else {
//           if(find(usertextcity)>0){
//               sCity.push(usertextcity.toUpperCase());
//               localStorage.setItem("cityname",JSON.stringify(searchCity));
//               addToList(usertextcity);
//           }
//       }
//   }
// });

//   getWeather()
// function UVIndex(lon, lat){
//   //call the end point for uv, get the uv
// }
//     function getItems() {
//       if (localStorage.getItem('input') !== null) {
//           var mySearch = JSON.parse(localStorage.getItem('input'));
//           for (var i = 0; i < mySearch.length; i++) {
//               let displayDiv = $('<search>');
//               displayDiv.addClass("searchBTN");
//               displayDiv.text(searchBTN[i]);
//               displayDiv.attr('value', searchBTN[i]);
//               $("#History").append(displayDiv);
//           }
//         }
//       }
//    apiKey = "d7a2fff6bee0f04ed93e526c04cc5132"
//    queryURL = "https://api.openweathermap.org/data/2.5/forecast? + d7a2fff6bee0f04ed93e526c04cc5132"
//    queryURL1 = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}+ d7a2fff6bee0f04ed93e526c04cc5132"
//   });
