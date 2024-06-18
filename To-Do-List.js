document.addEventListener('DOMContentLoaded', () => {
    const toDoForm = document.getElementById('to-do-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    toDoForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const taskText = taskInput.value.trim();

       
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);
            const completeButton = document.createElement('button');
            completeButton.classList.add('complete-btn');
            completeButton.textContent = 'Complete';
            listItem.appendChild(completeButton);
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
            completeButton.addEventListener('click', function() {
                listItem.classList.toggle('completed');
            });
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });
        }
    });
});
