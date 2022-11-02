fetch("../html/header.html")
.then(function(response) {
    return response.text();
})
.then(y => document.getElementById("header").innerHTML = y)