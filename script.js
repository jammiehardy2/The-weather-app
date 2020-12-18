var currentTemperature = document.getElementById("Temperature");
var currentHumidity = document.getElementById("Humidity");
var currentWindSpeed = document.getElementById("Wind Speed");
var currentUVIndex = document.getElementsByClassName("UV Index");

$(document).ready(function () {
  function getdate() {
    var today = moment().format("llll");
   = [
   

   

    $(".saveBtn").click(function(event){
      //event.stopPropagation()
      
      var usertextcity = $(this).siblings("textarea").val()
      //console.log(usertext)
      var key = $(this).attr("data-saving")
      localStorage.setItem(key,usertextcity)
    })

    //saveText.addEventListener("click", function (event) {
      //console.log("test");

      //localStorage.setItem.on (click saveBtn);

      //$("button").click(getdate);
    //});
});
