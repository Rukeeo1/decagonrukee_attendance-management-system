$(document).ready(function(){
    $("#btnid").click(function(){
        alert("we are ready");
    });

    //style related codes
    $("#hidewelcome").css({float: "", background:"", fontweight:'bold', borderradius: '20px', width: ""});
   // meeting
    $('#body').css('background-image', 'url("./img/plane.jpg")','no-repeat');
    $('#hidewelcome').css('background', 'rgba(128,0,0,0)');
    $("#myform").css({background:'rgba(128,0,0,0.1)', fontweight:'bold', borderradius: '20px'});
    
    //hide footer/tab
    var tanhide= $('#mytable').hide();
    //var hidfoot= $('#footer')
    //actual codes
    $('#name_error_message').html("");
    $('#email_error_message').hide();
    $('#password_error_message').hide();
    $('#confirm_error_message').hide();

    var error_name = false;
    var error_email= false;
    var error_password = false;
    var error_confirm = false;
    
    //what you see below calls the validating function in advance//
    //name//
    $('#exampleInputName').focusout(function(){
        check_inputName();
    });

    //$('#exampleInputDept').focusout(function(){
      //  check_dept();}); 

    $('#exampleInputEmail1').focusout(function(){
        //check_email(); i am relying on the html function here
    });
    //password//
    $('#exampleInputPassword1').focusout(function(){
        check_rukee();
    });
    //confirm//
    $('#confirmInputPassword1').focusout(function(){
       // alert("rukee");
        check_confirm();
    });

     //validating function for name
     function check_inputName(){
         //var that allows only alphabets
         var pattern = /^[a-zA-Z]*$/;
         var name = $("#exampleInputName").val();
         //compare
         if(pattern.test(name) && name !==""){
             $("#name_error_message").html("");
             $("#exampleInputName").css("border-bottom", "2px solid green");
         }else{
            $("#name_error_message").html("Special characters ^%#%/ not allowed");
            $("#name_error_message").show();
            $("#exampleInputName").css("border-bottom","2px solid red");
            error_name = true;

         }
        }
         //all alerts under functions are just for text purposes
         //Email already comes with html
         //check_rukee is actually for password.

         function check_rukee(){
            // alert("check if password function is working");
             var lengthOfpassword = $("#exampleInputPassword1").val().length; //gets value, returns length
             if(lengthOfpassword < 8){
                 $("#password_error_message").html("Should be at least 8 characters")
                 $("#password_error_message").show();
                 $("#password_error_message").css("border-bottom","2px solid red")
                  error_password = true;
             } else{
                 $("#password_error_message").hide();
                 $("#exampleInputPassword1").css("border-bottom", "2px solid green")
             }
             
         }
    //confirm password
    function check_confirm(){
        //alert("hey");
        var firstPassword = $("#exampleInputPassword1").val(); //gets the value
        var confirmedPassword= $("#confirmInputPassword1").val(); //get confirm 
        if(firstPassword !== confirmedPassword){
            $("#confirm_error_message").html("passwords don't match");
            $("#confirm_error_message").show();
            $("#confirm_error_message").css("border-bottom","2px solid red");
            error_confirm = true;// the var error_confirm becomes true, conflicting its original
        } else{
            $('#confirm_error_message').hide();
            $("#confirmInputPassword").css("border-bottom","2px solid green")
        }


    }

    $( "#submit" ).click(function() {


        var name= $("#exampleInputName").val();
        var email=$("#exampleInputEmail1").val();
        var password=$("#exampleInputPassword1").val();
        var confirmedPassword = $('#confirmpass').val();

        var worker = {
            "name" : name,
            "email" : email,
            "password" :password,
            
        };
  

 

        console.log(worker);
        alert(worker.email + 'is good');
        if(name === ''){
            alert('please enter your name');
        }
        else if (email === ''){
            alert('please enter email');
        }
        else if (password === ''){
            alert('please enter your password');
        }
        else if (confirmedPassword !== password){
            alert('passwords don\'t match');
        }
        else{
            alert('everything will be okay');
           // ajax below
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/user",
                data: worker,
                success: function() {
                    alert('welcome');
                    // window.location.replace('./login.html');
                
                }, error: function(){
                    alert('this is failed');
                    
                }
            });
            //ajax above`
        }

    });

    
});