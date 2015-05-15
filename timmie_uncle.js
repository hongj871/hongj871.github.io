Timmie = {
    nextselection : null
};

Story = {
    first_click : true,
    current_event : null
};


Yes = {
    yes_click : true
};


var audio = document.getElementById("story_button_sound");


var event_options = [
                    'uncle_found',
                    // 'yesno',
                    // 'yesno',
                    // 'yesno',
                    // 'yesno',
                    'ok',
                    'ok',
                    // 'sure',
                    'sure'
                    
                
                    ];

var event_text = [
                 '',
                //  'You encounter giggling octoweed. With its suction cup membranes, it sways and dances. Wanna tickle the octoweed?',
                //  'WOOOSSSSHHH What was that? ...<br> You see a bush. Wanna hide? Quick!',
                //  'You encounter a fuzzy pink bear. He smells like warm pretzels. <br>He waves at you and smiles with his pearly white grin. <br>Wanna play with Mr. Fuzzles?',
                //  'You bump into Madame Kertas. She directs her right hand <br> towards you. Wanna shake her hand?',
                 'You encounter a bobbling biscuit head. Astonished, you stop <br> to stare at this trickery.',
                 'Look, it\'s Mr. Worm. Bow as a sign of respect.',
                //  'You encounter an old slug. Your mom taught you to be respectful. You wait for him to pass you before you proceed.', 
                'You encounter a coughing snake. He doesn\'t stop coughing! <br> You think he\'s choking. Help him!',
              
                ];
                  

var event_image = [
                '<img src="uncle.png">',
                // '<img src="images/octoweed.png">',
                // '<img src="images/bush.png">',
                // '<img src="images/ted.png">',
                // '<img src="images/paper.png">',
                '<img src="images/bobble_head.png">',
                '<img src="images/worm.png">',
                // '<img src="images/slug.png">',
                 '<img src="images/snake.png">'
                
                  ];


var event_text_yes = [
                '',
                // 'The octo-weed tickles you back. <br>You\'re not scared to continue your search!',
                // 'You hide in the bush until the "woosh" moves north. <br>The leaves rustle against the wind. They gently clap to the beating of the dark forest. Frightened and still, you notice red berries and eat them. These poisonous Ackaberries poked you like nails, inside out.',
                // 'Mr. Fuzzles lifts his fuzzy hands for a warm embrace.<br>He pats Timmie\'s back and remember mom\'s hug. You feel a sting on your neck. Mr. Fuzzle\'s warm pretzel smell whiffs away.<br>By the hug of the bloodsucking vampire teddy bear, Timmie dies.',
                // 'Ouch! Mrs. Kertas accidentally gave you a papercut.', 
                '',
                '',
                // '',
                ''
   // 'You gently collapse on the pillow of dandellions. Dandellion weeds float up into the air. Achoo! Achoo! You can\'t stop sneezing.',
    ];
    
    
var event_text_no = [
                '',
                // 'Ok! Let\'s move on! <br> Find mom!',
                // 'Nothing to be afraid of, but it is getting dark.',
                // 'See ya later Mr. Fuzzles!',
                // 'That was impolite. Whatever... Look for mom!',
                '',
                '',    
                // '',
                ''
                
                ];
        
var event_text_ok = [     
                '',
                // '',
                // '',
                // '',
                // '',
                'You move closer to mock the bobbling biscuit head. <br> <em> Click, clack, crack! </em> Mimicking the thing, you sprain your neck. <br>Hang on Timmie!',
                'Sayonara Mr. Worm!',
                // '',
                ''
                
     // 'Look out for those ahead!',
    // 'Wow! Look at them prance!',
    // 'Prick. Stop the bleeding! ',

    
    ];

var event_text_sure = [     
    '',
    // '',
    // '',
    // '',
    // '',
    '',
    '',
    // 'Mom would be so proud! <br>Oh mom! Where are you?! I need you...',
    'Timmie uses the snake as a jump rope. Cough cough. <br>His dinner spits out. The snake thanks you and wishes you <br> luck and eternal life.'
    
    ];

    
function message() {
    // $('.ending').removeClass('hide');
    $('.ending').show();
}


$(".story_button").click(function(e) {
    e.preventDefault();
    sound_end();
    setTimeout(message, 5000);
   
    toggle_intro();
    
    toggle_actions();
    
    var nextactionSelect = Math.floor(Math.random()*event_text.length);
    Timmie.nextselection = nextactionSelect;

    Story.current_event = nextactionSelect;
    $(".event_text_holder").html(event_text[nextactionSelect]);
    $(".event_image_holder").html(event_image[nextactionSelect]);
    
    
    //   event_text.splice(nextactionSelect, 1);
    //   event_image.splice(nextactionSelect, 1);
    //   event_text_yes.splice(nextactionSelect, 1);
    //   event_text_no.splice(nextactionSelect, 1);
     //  event_text_ok.splice(nextactionSelect, 1);
     //  event_text_sure.splice(nextactionSelect, 1);
       console.log(event_text);

    console.log(nextactionSelect);
    if (event_options[nextactionSelect] == 'sure') {
        $('.button_sure').show();
        $('.actions').hide();
    } else if (event_options[nextactionSelect] == 'ok') {
        $('.button_ok').show();
        $('.actions').hide();
    } else if (event_options[nextactionSelect] == 'uncle_found'){
        $('.story_button').hide();
        $('.actions').hide();
        $('.button_mom').fadeIn(1000, 'fast');
    } else {
        $('.actions').show();    
    }
        $('.story_button').hide();
    });
    
    
    if (Timmie.nextselection == 0) {
        $('add_image').show();
    }
    

function sound_end() { 
     $("#story_button_sound").trigger('play');
} 


    function toggle_intro() {
    if (Story.first_click == true) {
            
        $('.introduction').hide();
        $('.story_button').hide();
    }
    Story.first_click = false;
}

    
function toggle_actions() {
    // $('.actions').toggleClass('show');
    $('.actions').show;
}

// function closing(){
//     if ((Timmie.nextselection == 2)  || (Timmie.nextselection == 4) || (Timmie.nextselection == 3))  {
//         $('.story_button').hide();
//         $('.death').fadeIn(2000);
//         $('.startover').fadeIn(30000);
//     }
// }

 $('.button_yes').click(function(e) {
    toggle_fate();
    $(".event_text_holder").html(event_text_yes[Story.current_event]);
    $('.story_button').show();
    
    // closing();
});


$(".button_no").click(function(e) {
    toggle_fate();
     $(".event_text_holder").html(event_text_no[Story.current_event]);
     $('.story_button').show();
});

$(".button_ok").click(function(e) {
    toggle_fate();
     $(".event_text_holder").html(event_text_ok[Story.current_event]);
     $('.story_button').show();
     $(".button_ok").hide();
});

$(".button_sure").click(function(e) {
    toggle_fate();
     $(".event_text_holder").html(event_text_sure[Story.current_event]);
     $('.story_button').show();
     $(".button_sure").hide();
});
        
function toggle_fate() {
    if (Yes.yes_click == true) {
        $('.actions').hide();
        $('.story_button').fadeIn(4500);
    }
}


