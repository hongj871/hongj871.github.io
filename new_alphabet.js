    $(document).ready(function(){
                $(".circle").mouseover(function(){
                    $(".circle").animate({height: "5px",width: "10px"});
                });
             $(".circle").mouseover(function(){
                    $(".circle").animate({height: "10px", width: "20px"});
                });
            });
            
            $(document).ready(function(){
                $(".circle2").mouseover(function(){
                    $(".circle2").animate({height: "5px",width: "10px"});
                    

                });
        
          
             $(".circle2").mouseover(function(){
                    $(".circle2").animate({height: "10px", width: "20px"});
                    $(".circle2").fadeOut("slow");
                    $(".circle2").fadeIn(500);
                });
            });
            