# 📝 ToDo List Assignment (Django App)

This is a simple Django-based task management system created for assignment evaluation.  
The project supports user login, task creation, completion toggle, update, and deletion — all connected to user-specific views and managed via Django's admin and templates.

---

## 🔧 Folder Structure

```
todo_list_assignment/
│
├── django_learning_test/        # Django project folder
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── ...
│
├── tasks/                       # Django app
│   ├── migrations/
│   ├── templates/
│   │   ├── task_list.html
│   │   └── update_task.html
│   ├── static/
│   ├── admin.py
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── db.sqlite3                   # Preloaded database with sample user
├── manage.py
└── README.md
```

---

## 👤 Sample Admin User

For testing via the admin panel:

- **Username**: `vivek`
- **Password**: `123`

---

## ⚙️ Installation (Local Setup)

1. **Clone the repository**
   ```bash
   git clone https://github.com/viveka-n-hebbar/todo_list_assignment.git
   cd todo_list_assignment
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install django
   ```

4. **(Optional) If db.sqlite3 is missing, migrate manually**
   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

5. **Run the server**
   ```bash
   python manage.py runserver
   ```

6. Visit `http://127.0.0.1:8000/` in your browser.

---

## 🚀 Deployment on PythonAnywhere

1. **Log in to PythonAnywhere**
   - Create a free account at [pythonanywhere.com](https://www.pythonanywhere.com)

2. **Open Bash console and clone repo**
   ```bash
   git clone https://github.com/viveka-n-hebbar/todo_list_assignment.git
   cd todo_list_assignment
   ```

3. **Create virtual environment**
   ```bash
   python3.10 -m venv venv
   source venv/bin/activate
   pip install django
   ```

4. **Configure web app**
   - Go to "Web" tab → Add a new web app → Manual config → Python 3.10
   - Set source directory: `/home/yourusername/todo_list_assignment`
   - Set WSGI file path:  
     `/home/yourusername/todo_list_assignment/django_learning_test/wsgi.py`

5. **Edit WSGI configuration**
   Replace content with:

   ```python
   import os
   import sys

   path = '/home/yourusername/todo_list_assignment'
   if path not in sys.path:
       sys.path.append(path)

   os.environ['DJANGO_SETTINGS_MODULE'] = 'django_learning_test.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

6. **Set static files** in PythonAnywhere Web tab:
   - URL: `/static/`
   - Directory: `/home/yourusername/todo_list_assignment/static/`

7. **Reload the web app** from the top of the Web tab.

---

## ✅ Live URL (Example)
```
https://yourusername.pythonanywhere.com/
```

---

## 📌 Features

- Admin panel with login
- Create, update, delete tasks
- Mark tasks as complete/incomplete
- User-specific task filtering
- Responsive UI using simple HTML templates

---

## 📬 Author

**Vivek N. Hebbar**  
GitHub: [@viveka-n-hebbar](https://github.com/viveka-n-hebbar)

---

## 🛡️ License

This project is for educational/demo purposes only.

