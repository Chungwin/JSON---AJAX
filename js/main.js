//XMLHttpRequest is a browser built in tool to download JSON
var ourRequest = new XMLHttpRequest();
//Receiving (GET) JSON Data from URL
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

//Once data is loaded ...
ourRequest.onload = function() {
    // .. save it all in var ourData as JSON format
    var ourData = JSON.parse(ourRequest.responseText);
    // .. access the second object.
    console.log(ourData[1]);
};
ourRequest.send();


// .. we did it! From here on, just generic JS tasks!
// Currently our AJAX Call runs as soon as the page loads
// But lets juts make it run, when we click on the blue button
