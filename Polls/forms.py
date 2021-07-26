import self as self
from django import forms
from .models import Question


class ItemForm(forms.ModelForm):
    question_text = forms.CharField(max_length=200)

    pub_date = forms.DateField(required=False, input_formats=[
        '%Y-%m-%d',
        '%m/%d/%Y',
        '%m/%d/%y',
        '%d/%m/%Y', ],
    )

    class Meta:
        model = Question
        # fields = '__all__'
        fields = ('question_text',)
        # , 'pub_date']
        # widgets = {
        #     'question_text': forms.TextInput(attrs={'class': 'question_text_class'}),
        #     'pub_date': forms.TextInput(attrs={'class': 'pub_date_class'}),
        # }












    #
    #      <form>
    #       <div class="form-group">
    #         <label for="exampleInputEmail1">Question text</label>
    # <!--        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter question text">-->
    # <!--        {{ form.question_text }}-->
    #           {% render_field form.question_text type="text" %}
    #       </div>
    #
    #       <div class="form-group">
    #         <label for="exampleInputPassword1">Date of publication</label>
    # <!--        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Pub. Date">-->
    #           {% render_field form.pub_date type="date" %}
    #       </div>
    #
    #       <!-- <div class="form-check">
    #         <input type="checkbox" class="form-check-input" id="exampleCheck1">
    #         <label class="form-check-label" for="exampleCheck1">Check me out</label>
    #       </div> -->
    #
    #       <button type="submit" class="btn btn-primary">Submit</button>
