

//boil
$('.circle').hover(function() {
    // on mouse in
    $(this).animate({ height: "50px", width:"50px"});
    $(this).animate({ opacity:".9"});
    $('.e').animate({ height:"900px", width:"800px"});
    
     $('.two').css({ width:"500px"});
    //  $('.horizontalwhitetop').css({ width:"800px"});
    

     
    document.getElementById("audiotest").play();
    
},
function() {
    // on mouse out
    $(this).animate({height:"40px",width:"55px"});
    //  $('.horizontalwhitetop').css({width:"70%"});
     document.getElementById("audiotest").pause();
});


// ramen done!
$('.circle').click(function() {
    $('body').css({ width:"1000px"});
    $('.circle').animate({ width:"500px", height: "10px"});
    $(".part2").fadeIn(2000);
    $(".part1").fadeIn(1000);
    document.getElementById("audiotest").pause();
    

   document.getElementById("test").play();
   
});














