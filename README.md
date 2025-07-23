# 📝 Django Task Manager App

A simple Task Manager web application built using **Django** and **Django REST Framework (DRF)**.  
Users can register, login, and manage their personal tasks — including create, update, delete, and mark them as completed. Admin users can access and assign tasks to others.

> ✅ Deployed at: [https://your-pythonanywhere-link](https://your-pythonanywhere-link)  
> 🔑 Sample Admin Login:  
> • **Username**: `vivek`  
> • **Password**: `123`

---

## 🗂️ Project Structure

```
todo_list_assignment/
├── manage.py
├── db.sqlite3
├── requirements.txt
├── README.md
├── todo_list_assignment/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── tasks/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── templates/
│   │   └── tasks/
│   │       ├── register.html
│   │       ├── login.html
│   │       ├── task_list.html
│   │       ├── create_task.html
│   │       └── update_task.html
│   ├── static/
│   │   └── tasks/
│   │       ├── css/
│   │       │   └── styles.css
│   │       └── js/
│   │           └── task_list.js
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/viveka-n-hebbar/todo_list_assignment.git
cd todo_list_assignment
```

### 2. Create Virtual Environment (optional but recommended)

```bash
python -m venv env
source env/bin/activate   # On Windows use: env\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing, manually install:

```bash
pip install django djangorestframework
```

### 4. Run Migrations

```bash
python manage.py migrate
```


### 5. Run the Development Server

```bash
python manage.py runserver
```

Then open in browser: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🌐 Deployment (PythonAnywhere)

You can deploy easily on [PythonAnywhere](https://www.pythonanywhere.com/):

- Upload the full project along with `db.sqlite3` for demo testing.
- Configure WSGI, Virtualenv, and Static Files.
- Use the provided admin user: `vivek / 123`

---

## 📌 Features

- User Registration & Login
- Task CRUD (Create, Read, Update, Delete)
- Mark task as Completed
- Admin task assignment (via Django Admin panel)
- Responsive design for desktop & mobile

---

## ✅ Sample Login

| Role  | Username | Password |
|-------|----------|----------|
| Admin | `vivek`  | `123`    |


