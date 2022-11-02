    fetch("../html/footer.html")
    .then(function(response) {
        return response.text();
    })
    .then(y => document.getElementById("footer").innerHTML = y)
