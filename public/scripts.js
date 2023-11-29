function navIcon() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function goToUploader() {
    window.location.replace("./upload");
}

function goToExperiments() {
    window.location.replace("./experiments");
}