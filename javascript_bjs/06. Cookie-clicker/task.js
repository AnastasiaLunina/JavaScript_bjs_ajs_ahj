let img = document.querySelector("#cookie");

img.onclick = function() {
    myFunction();
};

let clicks = 0;

function myFunction() {
    document.getElementById("cookie").classList.toggle("clicker__cookie");
    clicks += 1;
    document.getElementById("clicker__counter").innerHTML = clicks;
}


