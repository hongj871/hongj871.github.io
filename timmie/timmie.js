var event_text = ['You encounter a fuzzy pink bear. He smells like warm pretzels. He waves at you and smiles with his pearly white grin. Want to play with Mr. Fuzzles?',
                  'WOOOSSSSHHH" What was that?! .... You see a bush. Want to hide? Quick!',
                  'You encounter a well. It looks deep. Whats in there, Timmie? Do you want to find out?',
                  'You encounter a bobbling biscuit head. Astonished, you stop to stare at this trickery.',
                  'You encounter giggling octoweed. With its suction cup membranes, it sways and dances. Want to tickle the octo-weed?',
                  'You encounter a pillow of dandellions. Soft and silky, you feel a bit drowsy.Want to take a short nap?',
                  'Timmie encounters a coughing snake. He doesnt stop coughing! You think hes choking. Help him!',
                  'You encounter an old slug. Your mom taught you to be respectful. You wait for him to pass you before you proceed.',
                  'You almost slipped on mud! Walk slowly.',
                  'You step on kryptonite thorns! Look out for those ahead!',
                  'Thump Thump Thump. Fee Fi Fo Thumb. Good thing BIG didnt step on you!',
                  'You notice a golden peach fall from the sky, dying the twigs it landed on to gold.'];
                  

var event_image = ['bear.png',
                  'bush.png',
                  'well.png',
                  'bobble_head.png',
                  'octoweed.png',
                  'pillow.png',
                  'snake.png',
                  'slug.png',
                  'mud.png',
                  'thorns.png',
                  'feet.png',
                  'peach.png'
                  ];


// $("#timmie").keydown(function(e) {
//   var min = 0;
//     var move_amt = 10;
//   var position = $("#timmie").offset();
//   if(e.which == 39) { // right
//     var new_position =...;
//     $("#timmie").offset({ left: new_position})
//   }
// });        


var container=document.getElementById('container');
var timmie=document.getElementById('timmie');

var timmieLeft = 0;
function timmie(e){
  
  if(e.keyCode==39){
    timmieleft +=3;
    timmie.style.left = timmieLeft + 'px';
  }
}

// document.onkeydown = timmie;
               
              
// // event_text[Math.floor(Math.random()*event_text.length)];   
// //   $(".event_image_holder").html('<img src="' + event_image[Math.floor(Math.random()*.length)]+ '">');
                  




