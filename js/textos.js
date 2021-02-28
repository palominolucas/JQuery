$(document).ready(function () {

    reloadLinks();

    $('#add_button').click(function () {
        /*         
        Puedo usar Before para ponerlo antes y por fuera de la lista,
        Prepend para ponerlo primero, After para ponerlo por fuera y despues.
         */
        $('#links').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
        $('#add_link').val('');
        reloadLinks();
    })


    function reloadLinks() {
        $('a').each(function (index) {
            var that = $(this);
            var enlace = that.attr('href');
            that.text(enlace);

            that.attr('target', '_blank');
            //Puedo sacar atributos utilizando  removeAttr
            $('#add_button').removeAttr('disabled');
        });
    }

})