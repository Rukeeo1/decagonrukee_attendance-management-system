$(document).ready(function(){
    $('#body').css('background-image', 'url("./img/plane.jpg")','no-repeat');

    $( "#admin" ).click(function() {
        alert( "Handler for .click() called." );
        window.location.replace('./admin_login.html');
      });

    $( "#login" ).click(function() {
        window.location.replace('./login.html');
      });

$("#create").click(function(){
    var time = $("#time").val();
    var date =$("#date").val() ;
    var venue = $("#venue").val() ;
    var description = $("#describe").val();
   
   
    var meeting = {
        "time" : time,
        "date" : date,
        "venue": venue,
        "describe": description
        
    };

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/meeting",
        data: meeting,
        success: function(response) {
            console.log(response)
            alert('meeting sucessfully created');
        window.location.replace('./tindex.html');
        
        }, 
        error: function(response){
            console.log(response)
      //      alert('this is failed');
            
        }
    });


});

    
});