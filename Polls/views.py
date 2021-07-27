from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import Question, Choice
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
    # choices = question.choice_set.all()
    context = {
        'question': question,
        # 'choices': choices,
    }
    return render(request, 'polls/detail.html', context)
    # return HttpResponse("You are looking at question %s." % question_id)


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)

    return render(request, 'polls/results.html', {'question': question})


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/detail.html', {'question': question, 'error_message': "You didn't select a choice or you tried to vote when there's none.",})
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
    return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))


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