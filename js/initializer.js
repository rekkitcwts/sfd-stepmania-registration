$(function() 
{
	var FREQ = 10000;

	$("#register").click(register);

	function startAJAXcalls()
	{
		setTimeout(function () {
			getParticipants();
			startAJAXcalls();
		}, FREQ);
	}

	getParticipants();
	startAJAXcalls();
}); //document on ready function