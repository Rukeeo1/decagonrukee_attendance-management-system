 $(document).ready(function(){
    $("#home").click(function(){
        window.location.replace('./create.html');
    });

    //style related codes
    $("#hidewelcome").css({float: "", background:"", fontweight:'bold', borderradius: '20px', width: ""});
   // meeting
    $('#body').css('background-image', 'url("./img/plane.jpg")','no-repeat');
    $('#hidewelcome').css('background', 'rgba(128,0,0,0)');
    $("#myform").css({background:'rgba(128,0,0,0.1)', fontweight:'bold', borderradius: '20px'});
    $("#textbox").css({float: "", background:"", fontweight:'bold', borderradius: '20px', width: "500px"});
    
    //hide signup form and show
        $('#myform').hide();
        $('#textdiv').hide();

        //onclick create to show textarea
        $( "#create" ).click(function() {
            $('#myform').show();
            // $('#meetingtable').hide();
            // $("#meeting").hide();
            // $("#Decagon").hide();
            $('#create').hide();

          });
          //onclik add to append and onclik to remove

          $( "#add" ).click(function() {
            alert( "Handler for .click() called." );
            $('#meeting').hide();
            $('#create').hide();
          ;

          });
    //remove button
          
   
    //hide signup form and show

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

        //
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/user",
            data: worker,
            success: function(response) {
                console.log(response)
                alert('welcome');
            window.location.replace('./login.html');
            
            }, error: function(response){
                console.log(response)
          //      alert('this is failed');
                
            }
        });
        //

 

        console.log(worker);
       // alert(worker.email + ' is good');
        if(name === ''){
          //  alert('please enter your name');
        }
        else if (email === ''){
            //alert('please enter email');
        }
        else if (password === ''){
            //alert('please enter your password');
        }
        else if (confirmedPassword !== password){
            //alert('passwords don\'t match');
        }
        else{
    
           // ajax below
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/user",
                data: worker,
                success: function(response) {
                    console.log(response)
                    //alert('welcome');
                    // window.location.replace('./login.html');
                
                }, error: function(response){
                    console.log(response)
              //      alert('this is failed');
                    
                }
            });
            //ajax above`
        }

    });

    //my new addition for admin
      $("#admin").click(function(){
        //alert("we are ready");
        window.location.replace('./admin_login.html');
    });
    
    $("#login").click(function(){
        alert("we are ready");
        window.location.replace('./login.html');
    });
//Member login login

//append to div meeting details
$.ajax({
    type: "GET",
    url: "http://localhost:3000/meeting",
    dataType: "JSON",
    success: function(response) {
        console.log("Data: ", JSON.stringify(response));
        for (let i=0; i < response.length; i++){
            //console.log('llllllll')
            let time = response[i].time;
            let date= response[i].date;
            let venue= response[i].venue;
            let description = response[i].describe;
            var markup = "<tr><td>" + time + "</td><td>" + date + "</td><td>" +venue+ "</td></tr>";
            $("table tbody").append(markup);   
            $('#meeting').append(description);        

        };

    },
    error: function(response) {
        alert(JSON.stringify(response));
    }
    //alert(('.rukee').val());
});
//
    
});