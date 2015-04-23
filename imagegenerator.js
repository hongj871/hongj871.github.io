var lyric = ["everybody wants to be a cat", "blame it on the night", "just like a star", "you think you're cooler than me", "one, two, three", "give me a reason", "stay","one, two, three", "just the two of us", "i'm feeling electric tonight", "i'm so in love with you", "let's stay together", "with so much left to do"];
var lyric1 = ["does that make me crazy?", "do i wanna know?", "isn't see lovely?", "give me a reason", "stay","how can we stop the sun from shining?", "is it me you're looking for?", "what are you waiting for?" ];
var lyric2 = ["just like me", "possibly", "so call me maybe", "you think you're cooler than me", "it felt so wrong", "that's all i need to know","it don't matter", "we were born to die", "let's stay together", "i can see it in your eyes", "i know what's best for me", "we have no time for breathing", "i was born to make you happy" ];

var selectedlyric = false;
 
$(".go-button").click(function() {
  var nextlyric = lyric[Math.floor(Math.random()*lyric.length)];
  
  while (selectedlyric == nextlyric) {
    nextlyric = lyric[Math.floor(Math.random()*lyric.length)];
  }
  
  var nextlyric1 = lyric1[Math.floor(Math.random()*lyric1.length)];
  
  while (selectedlyric == nextlyric) {
    nextlyric = lyric1[Math.floor(Math.random()*lyric1.length)];
    $(this).css("opacity",0,1);
  }
  
  var nextlyric2 = lyric2[Math.floor(Math.random()*lyric2.length)];
  while (selectedlyric == nextlyric2) {
    nextlyric2 = lyric2[Math.floor(Math.random()*lyric2.length)];
  }
  
  selectedlyric = nextlyric;
  $(".lyric-holder").html(nextlyric);
  $(".lyric-holder1").html(nextlyric1);
  $(".lyric-holder2").html(nextlyric2);
  
}); 