// Referreing to the button and when "click" then execute whats in the function
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    //XMLHttpRequest is a browser built in tool to download JSON
    var ourRequest = new XMLHttpRequest();
    //Receiving (GET) JSON Data from URL
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    //Once data is loaded ...
    ourRequest.onload = function() {
        // .. save it all in var ourData as JSON format
        var ourData = JSON.parse(ourRequest.responseText);
        // .. access the second object.
        console.log(ourData[0]);
    };
    ourRequest.send();

});
