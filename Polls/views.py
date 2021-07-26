from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse
from .models import Question
from .forms import ItemForm


# Create your views here.
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {
        'latest_question_list': latest_question_list
    }
    return render(request, 'polls/index.html', context)
    # return HttpResponse("Pooooooooooooooooooooolls")


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    context = {
        'question': question
    }
    return render(request, 'polls/detail.html', context)
    # return HttpResponse("You are looking at question %s." % question_id)


def results(request, question_id):
    response = "You are looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


def create_item(request):
    form = ItemForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('Polls:index')

    # context = {'form': form }
    return render(request, 'polls/item-form.html', {'form': form })
    # return HttpResponse("Not made yet.")

def update_item(request, question_id):
    question = Question.objects.get(id=question_id)
    form = ItemForm(request.POST or None, instance=question)

    if form.is_valid():
        form.save()
        return redirect('Polls:index')

    context = {'form': form, 'question': question}
    return render(request, 'Polls/item-form.html', context)

def delete_item(request, question_id):
    question = Question.objects.get(id=question_id)

    if request.method == 'POST':
        question.delete()
        return redirect('food:index')