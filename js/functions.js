var siteloc = "http://127.0.0.1/crackerjack-test";
var scriptloc = "/py/";

  function register()
  {
  	var fname = $('#fname').val();
  	var lname = $('#lname').val();
  	var mobilenum = $('#mobilenumber').val();

  	if (fname != "" && lname != "" && mobilenum != "") 
  	{
  		
  	$.ajax({
  		url: 'py/register.py',
  		type: "POST",
  		data: {
  			fname: fname,
  			lname: lname,
  			mobile: mobilenum
  		},
  		dataType: "text",
  		success: function (response) 
  		{
  			alert(response);
  		},
  		error: function ()
  		{
  			alert('OOPS');
  		}
  	});
  	}
  	else
  	{
  		alert("All fields required!");
  	}
  	
  }

