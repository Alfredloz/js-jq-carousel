// script JQUEry nel head. Apertura di document ready.
$(function(){
//creare effeto carousel 
//creazioni variabili
var rightBtn = $('div.next');
var leftBtn = $('div.prev');
var firstImg = $('div.images img.first');
var lastImg = $('div.images img.last');
$(rightBtn).click(function () { 
    firstImg = firstImg.next();
    $('.images img').removeClass('active');
    if (!firstImg.hasClass('active')) {
        firstImg.addClass('active');
    } 

    // if (!lastImg.hasClass('active')) {
    //     $('div.images img.first').addClass('active');
    // }
});
$(leftBtn).click(function () { 
    lastImg = lastImg.prev();
    $('.images img').removeClass('active');
    if (!lastImg.hasClass('active')) {
        lastImg.addClass('active');
    }
});
});