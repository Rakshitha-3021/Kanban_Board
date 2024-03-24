function addTask(columnId) {
    var taskInput = document.getElementById(columnId + '-input');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var newTask = document.createElement('div');
        newTask.className = 'card';
        newTask.textContent = taskText;

        var column = document.getElementById(columnId + '-list');
        column.appendChild(newTask);

        taskInput.value = '';
    }
}


