var currentTemperature = document.getElementById("Current Temperature");
var currentHumidity = document.getElementById("Humidity");
var currentWindSpeed = document.getElementById("Wind Speed");
var currentUVIndex = document.getElementById("UV Index");
var searchBTN= document.getElementById("search");
var inputtext = document.getElementById("input");



$(document).ready(function () {
  

    $(".btn btn-primary").click(function);{
      
      
      var usertextcity = $(this).siblings("text").val()
      //console.log(usertext)
      //localStorage.setItem.on (click saveBtn);
      var key = $(this).attr("data-saving")
      localStorage.setItem(key,usertextcity)
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
