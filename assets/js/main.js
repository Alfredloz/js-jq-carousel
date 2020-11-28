// script JQUEry nel head. Apertura di document ready.
$(function(){
//creare effeto carousel 
//creazioni variabili
var rightBtn = $('div.next');
var firstImg = $('div.images img.first');
var lastImg = $('div.images img.last');
$(rightBtn).click(function () { 
    firstImg = firstImg.next();
    $('.images img').removeClass('active');
    if (!firstImg.hasClass('active')) {
        firstImg.addClass('active');
    } else {
        firstImg.removeClass('active');
    }
  

});
});