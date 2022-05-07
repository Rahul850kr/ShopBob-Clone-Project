    //The signed up users' data
    var users=JSON.parse(localStorage.getItem("users")) || [];
    
    //function to validate the login credentials
    function validateCredentials() {
        var userId = document.getElementById("userId").value;
        var pswd = document.getElementById("pswd").value;
        var boxNames = ["userIdErrorMsgBox", "pswdErrorMsgBox", "credentialError"], errorMsgBox = [];
        for (var i = 0; i < boxNames.length; i++) {
            errorMsgBox.push(document.getElementById(boxNames[i]));
        }
        var errorMsg = ["Enter your email or mobile phone number", "Enter your password", "<h2>There was a problem</h2><p>We cannot find an account with that Email id</p>", "<h2>There was a problem</h2><p>Your password is incorrect.</p>"];
        if (userId == "" && pswd == "") {
            errorMsgBox[0].innerHTML = errorMsg[0];
            errorMsgBox[0].style.display = "block";
            errorMsgBox[1].innerHTML = errorMsg[1];
            errorMsgBox[1].style.display = "block";
            errorMsgBox[2].style.display = "none";
        } else if(userId != "" && pswd == "") {
            errorMsgBox[0].style.display = "none";
            errorMsgBox[1].innerHTML = errorMsg[1];
            errorMsgBox[1].style.display = "block";
            errorMsgBox[2].style.display = "none";
        } else if(userId == "" && pswd != "") {
            errorMsgBox[0].innerHTML = errorMsg[0];
            errorMsgBox[0].style.display = "block";
            errorMsgBox[1].style.display = "none";
            errorMsgBox[2].style.display = "none";
        } else {
            for (var i = 0, flag = false, errorNumber = 0; i < users.length; i++) {
                if (userId == users[i].email) {
                    if (pswd == users[i].pswd) {
                        flag = true;
                        login(users[i].email, users[i].urName);
                        break;
                    } else errorNumber = 3; //pswd incorrect msg
                }
            }
            if (flag == false) {
                errorMsgBox[2].style.display = "block";
                if (errorNumber == 0) { // invalid login id
                    errorMsgBox[2].innerHTML = errorMsg[2];
                } else if (errorNumber == 3) { // invalid pswd
                    errorMsgBox[2].innerHTML = errorMsg[3];
                }
            } else {
                errorMsgBox[2].style.display = "none";
            }
        }
    }
    
    //allows user to login
    function login(value, urName) {
      localStorage.setItem("loggedUsr", value);
      localStorage.setItem("loggedUsrName", urName);
      location.replace("../index.html");
    }

    //redirects the page on button click
    function redirectPage(){
        location.replace("Shopbop Registration.html");
    }

    //creates temporary object data of user input details after form validation
    function SignUp(){
        var urName = document.getElementById("urName").value;
        var email = document.getElementById("urEmail").value;
        var pswd = document.getElementById("pswd").value;
        var rptPswd = document.getElementById("rptPswd").value;
        var flag = 0;
        var errorMsg = ["<p>Enter your name</p>", "<p>Enter your email</p>", "<p>Enter your password</p>", "<p>Passwords must match</p>"];
        if(urName == "" || email == "" || pswd == "" || pswd != rptPswd ) {
            flag = "<h2>There was a problem</h2>";
            if(urName == "") {
                flag = flag + errorMsg[0];
            }
            if(email == "") {
                flag = flag + errorMsg[1];
            }
            if(pswd == "") {
                flag = flag + errorMsg[2];
            }
            if(pswd != rptPswd) {
                flag = flag + errorMsg[3];
            }
            credentialError.style.display = "block";
            credentialError.innerHTML = flag;
        } else {
            var userData = { urName, email, pswd, rptPswd };
            localStorage.setItem("usersTemp", JSON.stringify(userData));
            location.href = "Authentication required.html";
        }
    }

    //function that runs in the otp verification page and creates array of user data objects
    function authenticate() {
        var temp1 = JSON.parse(localStorage.getItem("usersTemp"));
        if(temp1 == null) {
            location.replace("Shopbop Registration.html");
        }
        var users = JSON.parse(localStorage.getItem("users")) || [];
        let mailId = temp1.email;
        document.getElementById("mailId").innerHTML = mailId;
    }

    //verifies the dummy OTP: 12345
    function verifyOtp() {
        let otp = document.getElementById("otp").value;
        if(otp == "" || otp == null) {
            document.getElementById("otpErrorMsgBox").innerHTML = "<p>Please enter the OTP.</p>";
        } else if(otp != "12345"){
            document.getElementById("otp").value = "";
            document.getElementById("otpErrorMsgBox").innerHTML = "<p>Invalid OTP. Please check your code and try again!</p>";
        } else {
            let temp = JSON.parse(localStorage.getItem("usersTemp"));
            users.push(temp);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.removeItem("usersTemp");
            alert("Your account has been created successfully.");
            location.replace("signin.html");
        }
    }