// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  
  $('#signup-page #user_submit').attr("disabled", "disabled").val("Please fill in the form").css('color', '#C6D3E7');
  
  var valArr = new Array();
  valArr['user_first_name'] = false;
  valArr['user_surname'] = false;
  valArr['user_squadron'] = true; //Validates with blank OK
  valArr['user_username'] = true; //No Jquery validation - perhaps AJAX in future
  valArr['user_email'] = false;
  valArr['user_password'] = false;
  valArr['user_password_confirmation'] = false;
  
  var custom_username = false;
  
  
  //Signup page generate username
  $('#signup-page #user_surname, #signup-page #user_first_name').keyup(function() {
    
    //If the username hasn't been changed.
    if (custom_username == false) {
      uname = $('#signup-page #user_first_name').val() + $('#signup-page #user_surname').val();
      uname = uname.toLowerCase().replace(/[\s\xA0]+/g,'');
      $('#signup-page #user_username').val(uname);
    }
  });
  
  //Signup page validate content
  $('#signup-page #user_first_name, #signup-page #user_username, #signup-page #user_surname').keyup(function() {
    if ($(this).val().length < 1) {
      $(this).css('background-color', '#FFBABA');
      valArr[$(this).attr('id')] = false;
    } else {
      $(this).css('background-color', '#DFF2BF');
      valArr[$(this).attr('id')] = true;
    }
  });
  
  //Signup page Valudate username
  $('#signup-page #user_username').keyup(function () {
    uname = $('#signup-page #user_first_name').val() + $('#signup-page #user_surname').val();
    uname = uname.toLowerCase().replace(/[\s\xA0]+/g,'');
    if ($('#signup-page #user_username').val() == uname) {
      custom_username = false;
    } else {
      custom_username = true;
    }
  });
  
  //Signup page validate email
  $('#signup-page #user_email').keyup(function() {
    var emailVal = $(this).val();
    var emailRegexp = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    if (emailRegexp.test(emailVal)) {
      $(this).css('background-color', '#DFF2BF');
      valArr[$(this).attr('id')] = true;
    } else {
      $(this).css('background-color', '#FFBABA');
      valArr[$(this).attr('id')] = false;
    }
  });
  
  //Signup page validate password
  $('#signup-page #user_password').keyup(function() {
    if ($(this).val().length < 4) {
      $(this).css('background-color', '#FFBABA');
      valArr[$(this).attr('id')] = false;
    } else {
      $(this).css('background-color', '#DFF2BF');
      valArr[$(this).attr('id')] = true;
    }
  });
  
  //Signup page validate confirm password
  $('#signup-page #user_password_confirmation').keyup(function() {
    if ($(this).val() == $('#signup-page #user_password').val()) {
      $(this).css('background-color', '#DFF2BF');
      valArr[$(this).attr('id')] = true;
    } else {
      $(this).css('background-color', '#FFBABA');
      valArr[$(this).attr('id')] = false;
    }
  });
  
  //Signup page validate content
  $('#signup-page #user_first_name, #signup-page #user_username, #signup-page #user_surname').keyup(function() {
    if ($(this).val().length < 1) {
      $(this).css('background-color', '#FFBABA');
      valArr[$(this).attr('id')] = false;
    } else {
      $(this).css('background-color', '#DFF2BF');
      valArr[$(this).attr('id')] = true;
    }
  });
  
  //Check boxes
  $('#signup-page input').blur(function() {
    $('#signup-page input').keyup();
    enable_submit = true;
    
    for (var i in valArr) {
      if (valArr[i] == false) { enable_submit = false; }
    }
    
    if (enable_submit) {
      $('#signup-page #user_submit').attr("disabled", false).val("Sign Up").css('color', '#000');
      
    };
  });
  
  
  
});
