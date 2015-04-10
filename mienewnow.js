//boil
$('.c1').hover(function() {
    // on mouse in
    $(this).animate({ height: "20px", width:"110px"});
    $(this).css({ opacity:".7"});
    $('.one, .two, .three').css({width:"800%"});
    $('.full').css({width:"600px"});
    document.getElementById("audiotest").play();
},
function() {
    // on mouse out
    $(this).animate({height: "0px",width:"40px"});
     $('.one').css({width:"70%"});
     document.getElementById("audiotest").pause();
});



$('.c2').hover(function() {
    // on mouse in
    document.getElementById("audiotest").play();
},
function() {
    // on mouse out
     document.getElementById("audiotest").pause();
});





// full 1 ramen done!
$('.c1').click(function() {
     document.getElementById("audiotest").pause();
    $('.c1').animate({ width:"50px", height: "70px"});
    $('.part2').fadeIn(6000);
    $('.open').fadeIn(4000);
    $('.hot').fadeIn(5000);
    $('.eat').fadeIn(5000);
});



// full 2 ramen done!
document.getElementById("audiotest").pause();
$('.c2').click(function() {
    $('.c2').animate({ width:"50px", height: "70px"});
    $(".part3").fadeIn(1000);
    $(".pokemon").fadeIn(1000);

    $('.part1').fadeIn(3000);
    document.getElementById("test").play();
    
     $(".hamtaro").fadeIn(3000);
     $(".pusheen").fadeIn(3000);
     $(".kirby").fadeIn(3000);
     $(".dragonball").fadeIn(3000);
     $(".naruto").fadeIn(3000);
      $(".pokemon").fadeIn(3000);
       $(".slurp").fadeIn(3000);
       
        
      
       $(".arnold").fadeIn(3000); 
       $(".po").fadeIn(3000);




   document.getElementById("test2").play();
   
});



































// $( ".one" ).mouseover(function() {
//   $( this ).fadeTo( "slow" , 0.5, function() {
//   },
// $(".one").mouseout (function() {
//   $(this).fadeTo("fast", 0.9, function() {
//   }),  
// });
// });

// $( ".two" ).mouseover(function() {
//   $( this ).fadeTo( "slow" , 0.5, function() {
//   };
  
// });
// $( ".two" ).mouseout(function() {
//   $(this).fadeTo("fast", 0.9)
//   }
// });

// $( ".three" ).mouseover(function() {
//   $( this ).fadeTo( "slow" , 0.5, function() {
//   });
// });





// $('.full').hover(function() {
//     // on mouse in 
//     $(".full").css({ height: "5px", width:"50px"});
// });




// var audio = $(".ramenmie")[0];
// $(".c1").hover(function() {
//   .audio.play();
// });



            
//             var count = 0;
// var timer = $.timer(function() {
// 	$('#counter').html(++count);
// });
// timer.set({ time : 1000, autostart : true });
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
