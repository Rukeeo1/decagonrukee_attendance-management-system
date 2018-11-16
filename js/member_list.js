$(document).ready(function(){
    //last addition
    $('#body').css('background-image', 'url("./img/plane.jpg")','no-repeat');
    $("#myform").css({background:'rgba(128,0,0,0.1)', fontweight:'bold', borderradius: '20px'});
    $("#home").click(function(){
        alert("we are ready");
        window.location.replace('./tindex.html');
    });
    //last addition
    $("#admin").click(function(){
        alert("we are ready");
        window.location.replace('./tindex.html');
    });
    //
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/user",
        dataType: "JSON",
        success: function(response) {
            console.log("Data: ", JSON.stringify(response));
            for (let i=0; i < response.length; i++){
                //console.log('llllllll')
                let name = response[i].name;
                let email= response[i].email;
                let userId= response[i].id;
                var markup = "<tr id='"+userId+"'><td>" + name + "</td><td>" + email + "</td></tr>" //+ `<td><select onchange="markAttendance('${email}');" id="option"><option>Mark Attendance</option><option>Present</option><option>Absent</option></select></td>` + '<td><button class="ojigbo" id="tr_'+userId+'">Delete</button><td></tr>';
                $("table tbody").append(markup);           

            };

        },
        error: function(response) {
            alert(JSON.stringify(response));
        }
        //alert(('.rukee').val());
    });

        $(document).on("click",".ojigbo",function() {
            try {
                   let id = $(this).attr("id");
                   //alert($(this).closest("tr").attr("id"));
                   //alert(id);
                    id= id.replace('tr_','');
        $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/user/"+id,
        dataType: "JSON",
        success: function(response) {
          alert('sucessfully deleted');
          location.reload();

        },
        error: function(response) {
            //alert(JSON.stringify(response));
        }
        //alert(('.rukee').val());
    });

                   } catch (err){
                      // alert (err);
                   }
        });

             
});
   
   //create function name mark
   function markAttendance(email){
       let option = $('#option').val();
       let data = {user: email, status: option};
       $.ajax({
           url: `http://localhost:3000/rollcall`,
           method: 'post',
           data: data,
           success: function(data){
               alert('Attendance taken');

               //update interface
               $.ajax({
                   url: `http://localhost:3000/rollcall`,
                   method: 'get',
                   success: function(data){
                       let absent = 0, present = 0;
                       for(let i = 0; i < data.length; i++){
                           if (data[i].status === 'Present') {
                               present++;
                           }
                           else{
                               absent++;
                           }
                       }
                       $('#present').html(present);
                       $('#absent').html(absent);
                   }
               })
           }
       })
   }

   