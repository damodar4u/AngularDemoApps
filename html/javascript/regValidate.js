function validateRegForm(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd1").value;
    var cnfpassword = document.getElementById("pwd2").value;
    var phone = document.getElementById("phn").value;
    var date_birth = document.getElementById("dob").value;
    
/*  var usernameErr = document.getElementById("unameErr").value;
    var passwordErr = document.getElementById("pwd1Err").value;
    var cnfpasswordErr = document.getElementById("pwd2Err").value;
    var phone = document.getElementById("phnErr").value; */

    if (username == "") {
        document.getElementById("unameErr").classList.remove("hide");
        return;
    }
    else{
        document.getElementById("unameErr").classList.add("hide");
    }

    if (password == "") {
        document.getElementById("pwd1Err").classList.remove("hide");
        return;
    }
    else{
        document.getElementById("pwd1Err").classList.add("hide");
    }

    if (cnfpassword == "") {
        document.getElementById("pwd2Err").classList.remove("hide");
        return;
    }
    else{
        document.getElementById("pwd2Err").classList.add("hide");
    }

    if (cnfpassword != password) {
        alert("both password and confirm password should match.....");
        return;
    }
}