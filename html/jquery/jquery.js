/* $(document).ready(function(){
    alert("WELCOME TO JQUERY  ");
}) */


//shortcut for $(document).ready(function({}))
// $(function()

/* $(document).ready(function(){
    $("#jq1").click(function(){
        var fName = $("#uname").val();
        var passwd = $("#pwd").val();
        if (fName == "") {
            alert("first name is empty !!!!");
            return;
        }
        if (passwd == "") {
            alert("password is empty !!!!");
            return;
        }                   
    })
}) */

// no conflict variable to avoid conflict of using different libraries for $ 
// use a different substitute for $
// replace $ with new variable.


// var jq = $.noConflict();


$(document).ready(function(){
    // $("#unameErr").hide() // select by ID
    // $("#passwdErr").hide() // select by ID 

    $(".errMsg").hide() // select elements by class name 
    // ID should be unique, class can be duplicate b/w elements.
    
    // pwd_on_blur = $("#pwd").val();
    // cpwd_on_blur = $("#cpwd").val();

    $("#em").blur(function(){
       // var email_on_blur = $("#em").val();
       var email_on_blur = $(this).val();

        if (email_on_blur == "") {
            $("#emErr").show()
            return;
        } 
        else{
            if (email_on_blur.indexOf('@') == -1 || email_on_blur.indexOf('.') == -1) {
                $("#emValidErr").show()
            }
            else{
                $("#emValidErr").hide()
            }
            $("#emErr").hide()
        }  
    })

    // select elements by ID

/*     $("#em").mouseenter(function(){
        $(this).css("background-color","orange")
    })

    $("#em").mouseleave(function(){
        $(this).css("background-color","white")
    })

    $("#uname").mouseenter(function(){
        $(this).css("background-color","orange")
    })

    $("#uname").mouseleave(function(){
        $(this).css("background-color","white")
    })

    $("#pwd").mouseenter(function(){
        $(this).css("background-color","orange")
    })

    $("#pwd").mouseleave(function(){
        $(this).css("background-color","white")
    })

    $("#cpwd").mouseenter(function(){
        $(this).css("background-color","orange")
    })

    $("#cpwd").mouseleave(function(){
        $(this).css("background-color","white")
    }) */

    // select by element name // selects all elements of the same  name 

    $("input").mouseenter(function(){
        $(this).css("background-color","orange")
    })
    $("input").mouseleave(function(){
        $(this).css("background-color","white")
    })   

    $("#uname").blur(function(){
        // var uname_on_blur = $("#uname").val();
        var uname_on_blur = $(this).val();
        if (uname_on_blur == "") {
            $("#unameErr").show();
            return;
        }
        else{
            $("#unameErr").hide()
        }
    })



    $("#pwd").blur(function(){
        // var pwd_on_blur = $("#pwd").val();
        var pwd_on_blur = $(this).val();
        if (pwd_on_blur == "") {
            $("#passwdErr").show();
            return;
        }
        else{
            $("#passwdErr").hide()
        }
    })



    $("#cpwd").blur(function(){
       // var cpwd_on_blur = $("#cpwd").val();
       var cpwd_on_blur = $(this).val();
    //   var pwd_on_blur = $("#pwd").val();
        if (cpwd_on_blur == "") {
            $("#cpasswdErr").show();
            return;
        }
        else{
            $("#cpasswdErr").hide()
/*             if (cpwd_on_blur != pwd_on_blur) {
                $("#cpasswdValidErr").show()
            }  */
        
        }
    })



    $("#jq1").click(function(){
        var fName = $("#uname").val();
        var passwd = $("#pwd").val();
        var email = $("#em").val();
/*         if (fName == "") {
            $("#unameErr").show()
        }
        else{
            $("#unameErr").hide()
        } */
/*         if (passwd == "") {
            $("#passwdErr").show()
        } 
        else{
            $("#passwdErr").hide()
        }   */  
/*         if (email == "") {
            $("#emErr").show()
        } 
        else{
            if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
                $("#emValidErr").show()
            }
            else{
                $("#emValidErr").hide()
            }
            $("#emErr").hide()
        }   */               
    })
})