//displays logged user's name
function logCheck() {
    var x = localStorage.getItem("loggedUsrName");
    if(x != null || x != "") {
        document.getElementById("usr").innerHTML = x;
    }
}

//logs out the user
function logOut() {
    localStorage.removeItem("loggedUsr");
    localStorage.removeItem("loggedUsrName");
    alert("Successfully logged out.")
    location.replace("Shopbop Sign In.html");
}