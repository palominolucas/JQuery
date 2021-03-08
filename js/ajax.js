$(document).ready(function(){
 
    //Load 

    //$('#datos').load('https://reqres.in/api/users?page=2');

    var input = $('#input');
    // GET y POST

    $.get('https://reqres.in/api/users', {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>')
        })
    });
  

    $('#form').submit(function(e){
        e.preventDefault;
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
    
 
        /*         
        $.post($(this).attr('action'), usuario, function(response){
            console.log(response);
            let input = $('#input');
            input.append('<p>'+usuario.name+'</br>'+usuario.web+'</p>');
            input.css('display', 'block');
        }).done(function(){
            alert('¡Usuario añadido correctamente!');
        });
        */


        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log('Enviando usuario...');
            },
            success: function(response){
                console.log(response);
                input.append('<p>'+usuario.name+'</br>'+usuario.web+'</p>');
                input.css('display', 'block');
            },
            error: function(){
                console.log('¡Ha ocurrido un error!');
            },
            timeout: 2000
        });





        return false;
    });
});

