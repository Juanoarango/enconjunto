$(document).ready(function(){
  /* AL PASAR SOBRE LAS LI */
  $('li').mouseover(function(){
    $('li').css({
      'transition-duration':'.5s',
      'font-size':'1.5em'
    });
  });

  $('li').mouseout(function(){
    $('li').css({
      'transition-duration':'1s',
      'font-size':'1em'
    });
  });


  /* AL PASAR SOBRE LOS TEXTOS */
  $('h1, p').mouseover(function(){
    $('h1, p').css({
      'color':'red',
      'transition-duration':'0.5s'
    });
  });

  $('h1, p').mouseout(function(){
    $('h1, p').css('color','black');
  });

});
