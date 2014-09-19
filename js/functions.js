var siteloc = "http://127.0.0.1/crackerjack-test";
var scriptloc = "/py/";

function register()
{
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var mobilenum = $('#mobilenumber').val();
	var mobileRegex = /^0\d{10}$/;

	if (fname != "" && lname != "" && mobilenum != "" && mobileRegex.test(mobilenum)) 
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
				//alert(response);
				if ($('#message').hasClass('alert alert-success') || $('#message').hasClass('alert alert-danger'))
				{
					$('#message').removeClass();
				}

				$('#message').addClass('alert alert-success');
				$('#message').html('You are successfully registered. Please wait for your turn to play.');
				$('#fname').val("");
				$('#lname').val("");
				$('#mobilenumber').val("");
			},
			error: function ()
			{
				if ($('#message').hasClass('alert alert-success') || $('#message').hasClass('alert alert-danger'))
				{
					$('#message').removeClass();
				}
				$('#message').addClass('alert alert-danger');
				$('#message').html('OOPS');
			}
		});
	}
	else if (!mobileRegex.test(mobilenum))
	{
		if ($('#message').hasClass('alert alert-success') || $('#message').hasClass('alert alert-danger'))
		{
			$('#message').removeClass();
		}
		$('#message').addClass('alert alert-danger');
		$('#message').html('Please enter a valid mobile number, e.g. 09123456789');
	}
	else
	{
		//alert("All fields required!");
		if ($('#message').hasClass('alert alert-success') || $('#message').hasClass('alert alert-danger'))
		{
			$('#message').removeClass();
		}
		$('#message').addClass('alert alert-danger');
		$('#message').html('All fields are required.');
	}

}

function getParticipants()
{
	var tableContent;

	$.ajax({
		url: 'py/participants.py',
		dataType: "json",
		success: function (response) 
		{
			for (var i = 0; i < response.length; i++) 
			{
				tableContent += '<tr>';
				tableContent += '<td>';
				tableContent += response[i][2] + ' ' + response[i][1];
				tableContent += '</td>';
				tableContent += '<td>';
				tableContent += response[i][3];
				tableContent += '</td>';
				tableContent += '</tr>';
			}
			$("#participantsList").html(tableContent);
		},
		error: function ()
		{
			$("#participantsList").html("OOPS");
		}
	});
}

