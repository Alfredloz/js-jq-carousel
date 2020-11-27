// script JQUEry nel head. Apertura di document ready.
$(function(){
//creare effeto carousel 
//creazioni variabili
var rightBtn = $('div.next');
var firstImg = $('div.images img.first');
var movement = $('.active');
$(rightBtn).click(function () { 
    movement = movement.next();
    $('.images img.first').next().addClass('active');
    $('.images img.first').removeClass('active');

    // console.log($('div.images img.first').
    console.log('click');
});
});