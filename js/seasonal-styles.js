$("document").ready(function () {
    $('.seasons a').click(function (e) {//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        season = season.toLowerCase();
        //make the season lower case
        switch (season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $(".heading").text("Bloomin' like spring");
                $("html").css("background-color", "#2B7129");
                break;
            

                case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $(".heading").text("Hot like summer");
                $("html").css("background-color", "#EBA52B");
                break;

                case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $(".heading").text("Fallin for PSL");
                $("html").css("background-color", "#A81124");
                break;

                case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $(".heading").text("Cold like winter");
                $("html").css("background-color", "#005393");
                break;

            
            default:
                alert("No case matches")


        }
        $('#dateForm').submit(function(e){//handle form submission event
            e.preventDefault();//stop default submission
			var datetext = $('input[name=dateField]').val();//grab data from textbox
			var formDate = new Date(datetext);//create a date from form input
			var today = new Date();
			
			if(formDate > today)
			{
				alert(datetext + " is in the future!");
			}else{
				alert(datetext + " is in the past!");
			}


    });
});



