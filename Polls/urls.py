from django.urls import path

from . import views

app_name = 'Polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('addPoll/', views.add, name='addPoll'),
]

# Pelo visto, url deve ser o mesmo da view/html