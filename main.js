$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        var taskText = $('#task-input').val(); // Obtém o valor do campo de entrada

        if (taskText) {
            var listItem = $('<li></li>').text(taskText); // Cria um novo item de lista com o texto da tarefa
            $('#task-list').append(listItem); // Adiciona o item à lista

            $('#task-input').val(''); // Limpa o campo de entrada
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Alterna a classe 'completed' ao clicar no item
    });
});
