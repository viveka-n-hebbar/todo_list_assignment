document.addEventListener('DOMContentLoaded', () => {
  loadTasks();

  const form = document.getElementById('add-task-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const task = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        due_date: document.getElementById('due_date').value,
        completed: false
      };

      fetch('/api/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify(task)
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to create task.");
          return res.json();
        })
        .then(() => {
          loadTasks();
          form.reset();
        })
        .catch(err => alert(err.message));
    });
  }
});

function loadTasks() {
  fetch('/api/tasks/')
    .then(res => res.json())
    .then(tasks => {
      tasks.sort((a, b) => a.completed - b.completed);

      const taskList = document.getElementById('task-list');
      taskList.innerHTML = '';

      tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        taskCard.innerHTML = `
          <h3 class="task-title">${task.title}</h3>
          <p class="task-desc">${task.description}</p>
          <p class="task-date">🗓️ Due: ${task.due_date}</p>
          <p class="task-status ${task.completed ? 'completed' : 'pending'}">
            ${task.completed ? '✅ Completed' : '❌ Pending'}
          </p>
          <div class="task-controls">
            <label class="toggle-label">
              <input type="checkbox" ${task.completed ? 'checked' : ''} 
                onchange="toggleComplete(${task.id}, this.checked)">
              ${task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </label>
            <button class="btn update" onclick="window.location.href='/update-task/${task.id}/'">✏️ Update</button>
            <button class="btn delete" onclick="deleteTask(${task.id})">🗑️ Delete</button>
          </div>
        `;

        taskList.appendChild(taskCard);
      });
    });
}

function deleteTask(taskId) {
  fetch(`/api/tasks/${taskId}/`, {
    method: 'DELETE',
    headers: { 'X-CSRFToken': getCSRFToken() }
  }).then(() => loadTasks());
}

function toggleComplete(taskId, completed) {
  fetch(`/api/tasks/${taskId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFToken()
    },
    body: JSON.stringify({ completed })
  }).then(() => loadTasks());
}

function getCSRFToken() {
  const token = document.querySelector('[name=csrfmiddlewaretoken]');
  return token ? token.value : '';
}
