/*El $ es equivalente al objeto JQuery, por lo que puedo usar perfectamente JQuery o */
$(document).ready(function () {
    console.log("Ready to go!");

    var rojo = $("#rojo").css("background", "red")
        .css("color", "#2EDE01");

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "#7200D1");

    var verde = $("#verde").css("background", "green")
        .css("color", "#7A1403");


    var zebra = $(".zebra");

    console.log(zebra);
    /*
        Al haber varios elementos con la misma clase,
        estas se organizan en un array,
        pudiendo seleccionar uno de esos elementos de esta manera zebra[0]
    */
    zebra.css("border", "5px dashed black");

    var clicked = true;
    

    $(".no_zebra").on("click", cambio);
    
    function cambio() {
        if(clicked == true){    
        $(this).css("border", "5px dashed black");
                clicked = false;
        }else{
            $(this).css("border", "none");
                clicked = true;
        }

    };

    //Selectores de etiqueta!
    var parrafos = $("p");

    parrafos.click(function(){
        $(this).removeClass("zebra");
        console.log(zebra);
    })

    //Selectores de atributos!

    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'lightblue');
    $('[title="Mi_LinkedIn"]').css('background', '#701303')
    .css('color', 'white');


    //Selección multiple
    $('p, a').addClass('margen-superior');


    /* Este metodo nos permite encontrar una classe
       en caso de que el arbol HTML sea muy grande.
    
       var busqueda = $('#caja').find('.resaltado'); 
    
       Pero bien podemos usar:
    */
    var busqueda = $('#caja .resaltado')
    console.log(busqueda);
    //Puedo salir del foco en el que estoy realizando una busqueda al usar el método parent() para subir un escalon en el arbol HTML
    var busqueda2 = $('#caja .resaltado').parent().parent().find('[title=Mi_LinkedIn]');
    console.log(busqueda2);
});

