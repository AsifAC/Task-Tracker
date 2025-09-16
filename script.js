// Section 1: App Overview
// Task Tracker - A simple Task Tracker App built with HTML, CSS, and JavaScript. Users can add tasks, set deadlines, mark them as complete, and remove them. This lightweight app demonstrates DOM manipulation and event handling while providing an easy way to manage daily tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Section 4: Functions and Event Listeners

function handleSubmission(event) {
  event.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDeadline = document.getElementById("taskDeadline").value;

  if (!taskName || !taskDeadline) {
    alert("Task name and deadline are required!");
    return;
  }

  tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });

  render();
}

function render() {
  taskTable.innerHTML = tasks.map(task => `
    <tr>
      <td>${task.name}</td>
      <td>${task.description}</td>
      <td>${task.deadline}</td>
      <td><button onclick="markTaskComplete(this)">Complete</button></td>
      <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
  `).join('');
}

function markTaskComplete(button) {
  const row = button.parentElement.parentElement;
  row.style.textDecoration = "line-through";
}

function removeTask(button) {
  const rowIndex = button.parentElement.parentElement.rowIndex;
  tasks.splice(rowIndex - 1, 1); 
  render();
}

function init() {
  taskTable.innerHTML = ''; 
  tasks = [];
  render(); 
}

taskForm.addEventListener("submit", handleSubmission);

init();

