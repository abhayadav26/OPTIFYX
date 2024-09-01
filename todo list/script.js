document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const tasks = getTasks();
        tasks.push(taskText);
        saveTasks(tasks);
        renderTasks();
        taskInput.value = '';
    }
}

function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = getTasks();

    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="editTask(${index})" class="edit">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

function editTask(index) {
    const tasks = getTasks();
    const newTask = prompt('Edit your task:', tasks[index]);
    
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        saveTasks(tasks);
        renderTasks();
    }
}
