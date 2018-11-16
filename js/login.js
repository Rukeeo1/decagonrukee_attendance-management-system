$(document).ready(function(){
    $('#body').css('background-image', 'url("./img/plane.jpg")','no-repeat');


    //
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/user",
    //     data: worker,
    //     success: function(response) {
    //         console.log(response)
    //         alert('welcome');
    //         // window.location.replace('./login.html');
        
    //     }, error: function(response){
    //         console.log(response)
    //   //      alert('this is failed');
            
    //     }
    // });
   

    
 
    $("#submit").click(function(){
        var email=$("#exampleInputEmail1").val();
        var password=$("#exampleInputPassword1").val();
        
        var admin = {
            "email" : email,
            "password" :password,
            
        };

        if(email=='' || password==""){
            alert('please enter your email');
        }else{
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/user?email=" + email,

                success: function(response) {
                    alert(JSON.stringify(response));
                    if (response.length > 0) {
                        if(response[0].password === password) {
                           alert('welcome');
                           window.location.replace("\member_list.html");
                       // window.location = 'C:\Users\Ijeoma\Desktop\rukee_deca\decagonrukee_attendance-management_system\list.html'
                        }
                       
                    }else{
                        alert('please check email and password')
                    }
                    // () (JSON.stringify(response.length))
                },
                error: function(response) {
                    alert(JSON.stringify(response));
                }
            });
        }
    
    });

    //last addition
    $("#home").click(function(){
        //alert("we are ready");
        window.location.replace('./tindex.html');
    });
    //last addition
});