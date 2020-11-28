// script JQUEry nel head. Apertura di document ready.
$(function(){
//creare effeto carousel 
//creazioni variabili
var rightBtn = $('div.next');
var firstImg = $('div.images img.first');
$(rightBtn).click(function () { 
    firstImg = firstImg.next();
    console.log(firstImg);
    // $('.images img.first').next().addClass('active');
    $('.images img.first').removeClass('active');
    // if (firstImg.hasClass('active')) {
    //     firstImg.removeClass('active');
    // } else {
    //     firstImg.addClass('active');
    // }



    // console.log($('div.images img.first').
    console.log('click');
});
});