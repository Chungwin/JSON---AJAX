var animalContainer = document.getElementById("animal-info");

// Referreing to the button "btn" and when "click" then execute whats in the function
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
        renderHTML(ourData);
    };
    ourRequest.send();

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
