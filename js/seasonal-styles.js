$(function () {

    $("document").ready(function () {
      $('.seasons a').click(function (e) {//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let season = $(this).attr("href");//contents of href attribute of this element
        // alert(season);
  
        season = season.toLowerCase();
        console.log(season);
  
        switch (season) {
          case "spring":
            console.log('this is the working season', season)
            $('#logo').attr("src", 'images/spring.gif')
            $('#wear').attr("src", 'images/spring-wear.jpg')
            $('html').css('background-color', '#2B7129');
            $('#myHeader').text('Spring');
            break;
  
          case "fall":
            console.log('this is the working season', season)
            $('#logo').attr("src", 'images/fall.gif')
            $('#wear').attr("src", 'images/fall-wear.jpg')
            $('html').css('background-color', '#A81124');
            $('#myHeader').text('Fall!');
            break;
  
          case "summer":
            console.log('this is the working season', season)
            $('#logo').attr("src", 'images/summer.gif')
            $('#wear').attr("src", 'images/summer-wear.jpg')
            $('html').css('background-color', '#EBA52B');
            $('#myHeader').text(' Summer!');
            break;
  
          case "winter":
            console.log('this is the working season', season)
            $('#logo').attr("src", 'images/winter.gif')
            $('#wear').attr("src", 'images/winter-wear.jpg')
            $('html').css('background-color', '#005393');
            $('#myHeader').text('Winter');
            break;
  
          default:
            alert('no season matches')
            $('#logo').attr("src", 'images/four-seasons.gif')
            $('#wear').attr("src", 'images/300x400.png')
            $('html').css('background-color', '#ccc');
            $('#myHeader').text('Outfitter for All Seasons');
        }
  
      });
    });
  
  });
  
  
  
  