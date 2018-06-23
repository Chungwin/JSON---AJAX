var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");

// Referreing to the button "btn" and when "click" then execute whats in the function
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    //XMLHttpRequest is a browser built in tool to download JSON
    var ourRequest = new XMLHttpRequest();
    //Receiving (GET) JSON Data from URL
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    //Once data is loaded ...
    ourRequest.onload = function() {
        // .. save it all in var ourData as JSON format
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++
    //When btn gets clicked first time, URL page 1 loads, page counter increases to 2
    //When btn gets clicked second time, URL page 2 loads, page counter increases to 3
    //When btn gets clicked third time, URL page 3 loads, page counter increases to 4
    //If pageCounter > 3, css class .hide-me will execute
    if (pageCounter > 3) {
      btn.classList.add("hide-me");
    }

});

// Job of this function is to add HTML to page (id="animal-info")
function renderHTML(data) {
    var htmlString = ""
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

    //animalContainer declared on top already
    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}
