document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        taskItem.remove();
      });
  
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });
  
