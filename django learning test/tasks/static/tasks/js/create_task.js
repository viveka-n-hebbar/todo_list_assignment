document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('/api/tasks/', {
    method: 'POST',
    headers: { 'X-CSRFToken': getCSRFToken() },
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      alert('Task created!');
      window.location.href = '/';
    })
    .catch(error => console.error('Error:', error));
});

function getCSRFToken() {
  return document.querySelector('[name=csrfmiddlewaretoken]').value;
}
