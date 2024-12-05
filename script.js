$(document).ready(function() {
    // Quando o formulário for submetido
    $('#taskForm').submit(function(event) {
      event.preventDefault();  // Impede o envio do formulário
  
      // Obter o valor do input
      let taskText = $('#taskInput').val();
  
      // Verificar se o campo não está vazio
      if (taskText.trim() !== '') {
        // Criar um novo item de lista <li>
        let newTask = $('<li>').text(taskText);
  
        // Adicionar a tarefa na lista
        $('#taskList').append(newTask);
  
        // Limpar o campo de input após adicionar a tarefa
        $('#taskInput').val('');
      }
    });
  
    // Marcar tarefa como completa ao clicar nela
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');  // Adiciona ou remove a classe 'completed'
    });
  });