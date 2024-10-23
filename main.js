$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();

        let tarefa = $('#input-tarefa').val().trim();

        if (tarefa !== '') {
            $('#lista-tarefa').append(`
                <li>
                    <input type="checkbox" class="checkbox-tarefa">
                    <span>${tarefa}</span>
                </li>
            `);

            $('#input-tarefa').val('');
        }
    });

    $('#lista-tarefa').on('change', '.checkbox-tarefa', function() {
        let checkbox = $(this);
        let textoTarefa = checkbox.siblings('span');

        if (checkbox.is(':checked')) {
            textoTarefa.addClass('concluida');
        } else {
            textoTarefa.removeClass('concluida');
        }
    });

});

