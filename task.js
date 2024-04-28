
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
    window.location.href = 'todo.html';
  }
  document.getElementById('taskForm').addEventListener('submit', handleFormSubmit);
document.getElementById('addToday').addEventListener('click', openTaskForm);

function openTaskForm() {

    window.location.href = 'task.html';
}
