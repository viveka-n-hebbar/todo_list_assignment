from django.urls import path
from . import views
from .views import register_view

urlpatterns = [
    path('', views.task_page, name='task-page'),
    path('create-task/', views.create_task_view, name='create-task'),
    path('update-task/<int:task_id>/', views.update_task_view, name='update-task'),
    path('api/tasks/', views.TaskListAPIView.as_view()),
    path('api/tasks/<int:pk>/', views.TaskDetailAPIView.as_view()),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', register_view, name='register'),
]
