var check=true;

$("#inner").click(function(){

	if(check)
	{
		$("body").css("background-color","#333333");
		$("#outer").css("background-color","white");
		$("#inner").css({ "margin-left":"28px", "background-color": "red"});
		$("h1").css("color","white");
		$("h1").text("Dark Theme");
		check=false;

	}
	else{
		$("body").css("background-color","white");
		$("#outer").css("background-color","white");
        $("#inner").css({"background-color":"black","margin-left":"2px"});
        $("h1").css("color","black");
        $("h1").text("Light Theme");
        check=true;
	}
	
})