<html>
<head>
    <title>Decagon Attendance</title>    
   

    
   <!--< src="./js/index_two.js">--> 
     
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/bootstrap.min.css"/>
 <head>
  <body id="body">
    <nav class="navbar navbar-expand-lg navbar-light <!--bg-light-->" id="navbar">
        <a class="navbar-brand" id="btnid" href="#"><img src="./img/logo.png" id="footerimg"></a>
        <button class="navbar-toggler" type="button" id="btnid" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"  id="btnid">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Contact Us</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div>
        <div id="formdiv"> 
        <form id="myform">
            <h1>Attendance Form</h1>
                <div class="form-group" >
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Name">
                        <span class="error_form" id="name_error_message" >Rukee</span>  
                    </div>
                    <!--<div class="form-group" >
                      <label for="dept_error_message">Department</label>
                      <input type="text" class="form-control" id="exampleInputName" placeholder="Name">
                      <span class="error_form" id="dept_error_message" ></span>  
                  </div>-->
            <div class="form-group" >
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
              <span class="error_form" id="email_error_message" ></span>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              <span class="error_form" id="password_error_message" ></span>
            </div>
            <div class="form-group">
                    <label for="confirmInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmInputPassword1" placeholder="Password">
                    <span class="error_form" id="confirm_error_message" >confirm</span>
                  </div>
      
            <div class="form-group">
                            
              <p class="help-block"></p>
            </div>
            <div class="checkbox">
              <label>
                <!--<input type="checkbox"> Remember me-->
              </label>
            </div>
            <button type="submit" class="btn btn-success btn-block" id="submit">Submit</button>
          </form>
      </div>
</html>