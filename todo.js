function addTask(task, listId) {
    const taskList = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = task.name + ' - ' + task.date + ' ' + task.time; 
    taskList.appendChild(li);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const task = {
        name: taskName,
        date: date,
        time: time
    };
    let listId;
    const currentScreen = document.querySelector('.active-screen');
    switch (currentScreen.id) {
        case 'todayScreen':
            listId = 'todayTasks';
            break;
        case 'tomorrowScreen':
            listId = 'tomorrowTasks';
            break;
        case 'somedayScreen':
            listId = 'somedayTasks';
            break;
        case 'allTasksScreen':
            listId = 'allTasks';
            break;
        default:
            listId = 'allTasks'; 
    }
    addTask(task, listId);
    window.location.href = 'todo.html';
}

document.getElementById('taskForm').addEventListener('submit', handleFormSubmit);
// Add an event listener to the "Today" button
document.getElementById('addToday').addEventListener('click', openTaskForm);

function openTaskForm() {
    // Redirect to the task details page
    window.location.href = 'todo.html';
}
