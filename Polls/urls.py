from django.urls import path

from . import views

app_name = 'Polls'
urlpatterns = [
    path('', views.index.as_view(), name='index'),
    # path('<int:question_id>/', views.detail, name='detail'),
    path('<int:pk>/', views.detail.as_view(), name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('create', views.create_item, name='create_item'),
    path('update/<int:question_id>/', views.update_item, name='update_item'),
    path('delete/<int:question_id>/', views.delete_item, name='delete_item'),
]
