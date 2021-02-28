$(document).ready(function () {
    var box = $('#box');
    var show = $('#show');
    var hide = $('#hide');


    box.css('width', '300px')
        .css('height', '50px')
        .css('border', '5px dashed black')
        .css('background', '#ccc')
        .css('text-align', 'center')
        .css('line-height', '50px')
        .css('color', 'crimson')
        .css('font-size', '19px')
        .css('font-family', 'Verdana')
        .css('margin-top', '30px');

    box.hide();
    hide.hide();

    show.click(function () {
        box.slideDown(1000);
        show.hide();
        hide.show();
    });
    hide.click(function () {
        box.slideUp(1000);
        hide.hide();
        show.show();
    })

    /*     Tambien puedo jugar con la opacidad, utilizando fadeTo('propiedad', 'opacidad') 
    poniendo una opacidad de 1 al aparecer, y 0 al desaparecer.
     */

    $('#todoEnUno').click(function(){
        box.fadeToggle(1000);
    })

    var animation = $('#animation');

    animation.click(function(){
        box.animate({
            marginLeft: 500,
        fontSize: 40,
        height: 100,
        }, 1000)
        .animate({
            borderRadius: 900,
            marginTop: 100,
        }, 1000)
        .animate({
            borderRadius: 0,
            marginLeft: 0,
        }, 1000)
        .animate({
            borderRadius: 100,
            marginTop: 10,
        }, 1000)
        box.animate({
            marginLeft: 500,
        fontSize: 40,
        height: 100,
        }, 1000)
    });


});