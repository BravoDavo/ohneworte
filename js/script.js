function setAspectRatio(){
  var outer = $('.container');
  var box = $('.card');

  if (outer.height() > outer.width()) {
      box.css({'width': '100%'});
      box.css({'height': box.width()});

  } else {
      box.css({'height': '100%'});
      box.css({'width': box.height()});
  }
}

$(document).ready(function() {
  setAspectRatio();

  $(window).resize(function() {
      setAspectRatio();
  })
})
var maincount = 0;
//C:/Users/Anwender/netcase/game
var images = [];
var ImagesPicture = [];
var ImagesText = [];
var ImagesSign = [];
// Hier auch nochmal für die game Elemente selbst
var root = 'E:/Projects/ohneworte/game/';
var TypeCount = 3;
var PairCount = 3;
var CardCount = 0;

var gameState = "game";

var stateRedDropped = false;
var stateBlueDropped = false;
var stateYellowDropped = false;

var stateRedDroppedType = 0;
var stateBlueDroppedType = 0;
var stateYellowDroppedType = 0;

//Type 1: Signs
//Type 2: Pictures
//Type 3: Text

$(".overlay").click(function () {
  //if (gameState === 'result')
  //{
    $(".popup, .overlay").fadeToggle();
    //gameState = 'game';
    $('#droppable-red > div.card > div.front').empty();
    $('#droppable-blue > div.card > div.front').empty();
    $('#droppable-yellow > div.card > div.front').empty();
    $('#droppable-red').removeClass("wobble");
    $('#droppable-blue').removeClass("wobble");
    $('#droppable-yellow').removeClass("wobble");	
    stateRedDropped = false;
    stateBlueDropped = false;
    stateYellowDropped = false;
    stateRedDroppedType = 0;
    stateBlueDroppedType = 0;
    stateYellowDroppedType = 0;				
    /*if (MainCount >= CardCount)
    {
      state = 'finished';
      setTimeout(function() {$(".overlay, .endofgame").fadeToggle();},1000);
    }*/
  //}
});

for (var i = 1; i <= TypeCount; i++) {
var imgRoot = ''+root+''+i+'_';

// get images, place them in an array & randomize the order
for (var j = 1; j <= PairCount; j++) { 
//var rand = Math.floor((Math.random() * 16) + 1);

var img1 = ''+imgRoot+''+j+'.png';
images.push(img1);
CardCount++;
}
if (CardCount == PairCount)
{
ImagesSign = images;
}
else if (CardCount == PairCount * 2)
{
ImagesPicture = images;
}
else
{
ImagesText = images;
}
images = [];
}
randomizeImages();



// output images then hide them

var output = ""; 
for (var i = 1; i <= 3; i++) {
//output += "<div class=\"row\" id=\"area-";
//output += ""+i+"\">";
output += "";
for (var j = 0; j < 4; j++) {
    
  
  if (i == 1)
  {
    if (j == 0)
    {
      output += "<div id=\"droppable-red\" class=\"container\" >";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "</div>";
      output += "<div class=\"front red\"/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";				
    }
    else {
      output += "<div id=\""+ i +"_"+ ImagesSign[j-1].split(".")[0].split("_")[1] +"\" class=\"container\" >";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "<img class=\"\" src = '" + ImagesSign[j-1] + "'/>";
      output += "</div>";
      output += "<div class=\"front red\"/>";
      //output += "<img class=\"\" src = \""+ root +"monkey_red.png\"/>";
      output += "<img class=\"\" src = '" + ImagesSign[j-1] + "'/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
    }
  }
  else if (i == 2)
  {
    if (j == 0)
    {
      output += "<div id=\"droppable-blue\" class=\"container\" >";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "</div>";
      output += "<div class=\"front blue\"/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";				
    }
    else {
      output += "<div id=\""+ i +"_"+ ImagesPicture[j-1].split(".")[0].split("_")[1] +"\" class=\"container\">";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "<img class=\"\" src = '" + ImagesPicture[j-1] + "'/>";
      output += "</div>";
      output += "<div class=\"front blue\"/>";
      //output += "<img class=\"\" src = \""+ root +"monkey_blue.png\"/>";
      output += "<img class=\"\" src = '" + ImagesPicture[j-1] + "'/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
    }
  }
  else
  {
    if (j == 0)
    {
      output += "<div id=\"droppable-yellow\" class=\"container\" >";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "</div>";
      output += "<div class=\"front yellow\"/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";				
    }
    else {		
      output += "<div id=\""+ i +"_"+ ImagesText[j-1].split(".")[0].split("_")[1] +"\" class=\"container\">";
      output += "<div class=\"card\">";
      output += "<div class=\"back\"/>";
      output += "<img class=\"\" src = '" + ImagesText[j-1] + "'/>";
      output += "</div>";
      output += "<div class=\"front yellow\"/>";
      //output += "<img class=\"\" src = \""+ root +"monkey_red.png\"/>";
      output += "<img class=\"\" src = '" + ImagesText[j-1] + "'/>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
    }
  }
  //output += "</div>";
  
}
//output += "</ul>";
//output += "</div>";
}
output += "";

/*output += "<div id=\"result\" class=\"row\">";
output += "<div id=\"droppable-red\" class=\"card-result\">";
output += "<section class=\"card-inner\">";
output += "<div class=\"card-img\" style=\"border: 10px solid red;\">";
output += "</div></section>";
output += "</div>";
output += "<div id=\"droppable-blue\" class=\"card-result\">";
output += "<section class=\"card-inner\">";
output += "<div class=\"card-img\" style=\"border: 10px solid blue;\">";
output += "</div></section>";
output += "</div>";
output += "<div id=\"droppable-yellow\" class=\"card-result\">";
output += "<section class=\"card-inner\">";
output += "<div class=\"card-img\" style=\"border: 10px solid yellow;\">";
output += "</div></section>";
output += "</div>";
output += "</div>";*/

$("game").html(output);
var pos = [];
$('.container').each(function(i, obj) {
var childPos = $(obj).offset();
var parentPos = $(obj).parent().offset();
var childOffset = {
  top: childPos.top - parentPos.top,
  left: childPos.left - parentPos.left
}
console.log(childOffset.top);
console.log(childOffset.left);
pos.push(childOffset);
//var top = getTop($(obj));

/*$(obj).css('top', childOffset.top+"px");
$(obj).css('left', childOffset.left+"px");
$(obj).css('position', 'fixed');*/
});
$('.container').each(function(i, obj) {

$(obj).css('top', pos[i].top+"px");
$(obj).css('left', pos[i].left+"px");
$(obj).css('position', 'fixed');
});

function getTop(ele)
{
  var eTop = ele.offset().top;
  var wTop = $(window).scrollTop();
  var top = eTop - wTop;

  return top; 
}

// randomize array of images
function randomizeImages(){
Array.prototype.randomize = function()
{
  var i = this.length, j, temp;
  while ( --i )
  {
    j = Math.floor( Math.random() * (i - 1) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
};

ImagesPicture.randomize();
ImagesSign.randomize();
ImagesText.randomize();
/*var j, temp;
for (var i = PairCount; i < 0; --i)
{
      j = Math.floor( Math.random() * (i - 1) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}*/
}

$( function() {
  var position;
var copy = "";
      copy += "<div id=\"\" class=\"container\" >";
      copy += "<div class=\"card\">";
      copy += "<div class=\"back\"/>";
      copy += "</div>";
      copy += "<div class=\"front grey\"/>";
      copy += "</div>";
      copy += "</div>";
      copy += "</div>";	
  $( ".container" ).draggable({
  revert: "invalid",
   start: function( event, ui ) {
       $(this).addClass('card-ontop');
    //offset = ui.draggable.offset();
    copy = $(this);
    $('game').append(copy);
   },
   stop: function( event, ui ) {
       $(this).removeClass('card-ontop');
   }
});

  $( "#droppable-red" ).droppable({
    accept: function(card) {
  var cardType = card.attr("id").split("_");
  if (cardType[0]==1 && !stateRedDropped && (stateBlueDroppedType == 0 || stateBlueDroppedType == cardType[1]) && (stateYellowDroppedType == 0 || stateYellowDroppedType == cardType[1])){
    return true;
  }
  },
    over: function( event, ui ) {
  $( this ).find("div").addClass("scale");
    },
    out: function( event, ui ) {
  $( this ).find("div").removeClass("scale");
    },		  
    drop: function( event, ui ) {
  stateRedDropped = true;
  console.log("red: " + ui.draggable.attr("id").split("_")[1]);
  //console.log(ui.draggable);
  stateRedDroppedType = ui.draggable.attr("id").split("_")[1];
      $( this ).html(ui.draggable.html());
  $( this ).addClass("coin-flip");
  $('#row_1').addClass("slide-in");
  console.log($('row_1'));
  ui.draggable.remove();
  
  if(stateBlueDropped && stateYellowDropped){
    setTimeout(function() {
    $('#droppable-red').removeClass("coin-flip");
    $('#droppable-blue').removeClass("coin-flip");
    $('#droppable-yellow').removeClass("coin-flip");
    },3000);			
  setTimeout(function() {
    document.getElementById('result-popup').innerHTML = $('#result').html();			
    $(".overlay, .popup").fadeToggle();					
  },4000);	
  }	
    }
  });

$( "#droppable-blue" ).droppable({
    accept: function(card) {
  var cardType = card.attr("id").split("_");
  if (cardType[0]==2 && !stateBlueDropped && (stateRedDroppedType == 0 || stateRedDroppedType == cardType[1]) && (stateYellowDroppedType == 0 || stateYellowDroppedType == cardType[1])){
    return true;
  }
  },
    over: function( event, ui ) {
  $( this ).find("div").addClass("scale");
    },
    out: function( event, ui ) {
  $( this ).find("div").removeClass("scale");
    },	
    drop: function( event, ui ) {
  stateBlueDropped = true;
  console.log("blue: " + ui.draggable.attr("id").split("_")[1]);		
  stateBlueDroppedType = ui.draggable.attr("id").split("_")[1];
      $( this ).html(ui.draggable.html());
  $( this ).addClass("coin-flip");
  ui.draggable.remove();
  if(stateRedDropped && stateYellowDropped){	
    setTimeout(function() {
    $('#droppable-red').removeClass("coin-flip");
    $('#droppable-blue').removeClass("coin-flip");
    $('#droppable-yellow').removeClass("coin-flip");
    },3000);			
  setTimeout(function() {
    document.getElementById('result-popup').innerHTML = $('#result').html();	
    $(".overlay, .popup").fadeToggle();					
  },4000);	
  }
    }
  });

$( "#droppable-yellow" ).droppable({
    accept: function(card) {
  var cardType = card.attr("id").split("_");
  //console.log(cardType[0]);
  if (cardType[0]==3 && !stateYellowDropped && (stateBlueDroppedType == 0 || stateBlueDroppedType == cardType[1]) && (stateRedDroppedType == 0 || stateRedDroppedType == cardType[1])){
    return true;
  }
  },
    over: function( event, ui ) {
  $( this ).find("div").addClass("scale");
    },
    out: function( event, ui ) {
  $( this ).find("div").removeClass("scale");
    },	
    drop: function( event, ui ) {
  stateYellowDropped = true;
  console.log("yellow: " + ui.draggable.attr("id").split("_")[1]);
  stateYellowDroppedType = ui.draggable.attr("id").split("_")[1];
      $( this ).html(ui.draggable.html());
  $( this ).addClass("coin-flip");
  ui.draggable.remove();
  if(stateRedDropped && stateBlueDropped){
    setTimeout(function() {
    $('#droppable-red').removeClass("coin-flip");
    $('#droppable-blue').removeClass("coin-flip");
    $('#droppable-yellow').removeClass("coin-flip");
    },3000);			
  setTimeout(function() {
    document.getElementById('result-popup').innerHTML = $('#result').html();
    $(".overlay, .popup").fadeToggle();					
  },4000);	
  }				
    }
  });

    $('#droppable-red').draggable("disable");
    $('#droppable-blue').draggable("disable");
    $('#droppable-yellow').draggable("disable");

    $('#menu-basics').click(function() {
      
    });
} );