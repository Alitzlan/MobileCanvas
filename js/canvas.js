$(document).ready(function(event) {
	$("#info").html("X: N/A Y: N/A");
	var c = document.getElementById("paint");
	c.width = window.innerWidth ? window.innerWidth*0.9 : device.width*0.9;
	var ctx = c.getContext("2d");
	var stroking = false;
	ctx.lineWidth = 1;
	$("#paint").bind("touchstart mousedown", function(event) {
		event.preventDefault();
		var x = event.originalEvent.pageX-$("#paint").offset().left;
		var y = event.originalEvent.pageY-$("#paint").offset().top;
		$("#info").html("X: " + x + " Y: " + y);
		ctx.moveTo(x, y);
		ctx.strokeStyle = $("#colordisp").css("background-color");
		ctx.lineWidth = $("#sizeslider").val();
		ctx.beginPath();
		stroking = true;
	}).bind("touchmove mousemove", function(event) {
		event.preventDefault();
		var x = event.originalEvent.pageX-$("#paint").offset().left;
		var y = event.originalEvent.pageY-$("#paint").offset().top;
		$("#info").html("X: " + x + " Y: " + y);
		if(stroking) {
			ctx.lineTo(x, y);
			ctx.stroke();
		}
	}).bind("touchend mouseup mouseout", function(event) {
		event.preventDefault();
		stroking = false;
	});
	
	$("#clearbtn").bind("tap click", function(event) {
		ctx.clearRect(0, 0, c.width, c.height);
	});
});