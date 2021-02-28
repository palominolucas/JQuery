$(document).ready(function () {

    //Mouse Over and Out 

    var caja = $("#caja");
    var datos = $("#datos");

    caja.css('text-align', 'center');
    $("#parrafin").css('margin-top', '45%');
    datos.css('text-align', 'center')
        .css('padding', 'auto')
        .css('word-wrap', 'break-word');




    /*    
        caja.mouseover(function(){
            $(this).css("background", "#CC400C");
        });
    
        caja.mouseout(function(){
            $(this).css("background", "#36CC0C");
        }); 
    */
    function cambiar1() {
        $(this).css("background", "#CC400C");
    };
    function cambiar2() {
        $(this).css("background", "#36CC0C");
    };

    //Hover
    caja.hover(cambiar1, cambiar2);


    //Click, Doble Click
    var clicked = true;
    //para doble click, en lugar de "click", se usa "dblclick"
    caja.on("click", cambio);

    function cambio() {
        if (clicked == true) {
            caja.css("background", "#0411A6")
                .css("color", "white");
            clicked = false;
        } else {
            caja.css("background", "goldenrod")
                .css("color", "black");
            clicked = true;
        };
    };


    var nombre = $("#nombre");


    nombre.focus(function () {
        $(this).css('border', "2px inset #CF1CDC")
    });


    nombre.blur(function () {
        $(this).css('border', "2px outset #ccc");
        datos.text($(nombre).val()).show();
    })


    nombre.on("keypress", function (e) {
        if (e.which == 13) {
            e.preventDefault();
            console.log(nombre);
            datos.text($(nombre).val()).show();
        };
    });


    //Mouse down y up
    datos.mousedown(function () {
        $(this).css('border-color', '#2BDC1C');
    });
    datos.mouseup(function () {
        $(this).css('border-color', '#D96209');
    });

    datos.mouseout(function () {
        $(this).css('border-color', 'black');
    });



    //Mouse move
    $(document).mousemove(function () {
        $('body').css('cursor', 'none');
        console.log("En X: " + event.clientX);
        console.log("En Y: " + event.clientY);
        $("#sigueme").css("left", event.clientX)
            .css('top', event.clientY);
    })


});