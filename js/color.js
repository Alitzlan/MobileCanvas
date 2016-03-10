$(document).ready(function(event) {
	$(".colorslider").bind("change", function(event){
		var r = ("00"+parseInt($("#redslider").val()).toString(16)).substr(-2);
		var g = ("00"+parseInt($("#greenslider").val()).toString(16)).substr(-2);
		var b = ("00"+parseInt($("#blueslider").val()).toString(16)).substr(-2);
		$("#info").html("#"+r+g+b);
		$("#colordisp").css("background-color", "#"+r+g+b);
	});
});