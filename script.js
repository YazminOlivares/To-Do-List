document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Función para agregar una nueva tarea
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
  
      // Botón de eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        taskItem.remove();
      });
  
      // Marcar como completada
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      // Limpiar el campo de entrada
      taskInput.value = '';
    };
  
    // Evento para el botón de agregar tarea
    addTaskBtn.addEventListener('click', addTask);
  
    // Evento para agregar tarea presionando Enter
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });
  