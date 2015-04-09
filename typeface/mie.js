$(function(){
    $(".horizontal").hover(
        function(){
          $(this).animate({width: '70%'});
        },
        function(){
            $(this).animate({width: '50%'});
        }
    );                             
});

