
  var username = form.user_name;
  var password = form.pass_word;
  var form = document.forms.form;
  var button = document.getElementById("btn");
  var successMsg = document.getElementById("success");

  form.onsubmit = success;

  function success(){
    form.style.display="none";
    successMsg.style.display="block";
    successMsg.innerHTML= "welcome";

  }