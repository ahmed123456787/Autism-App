from django.urls import path 
from .views import PredictorVeiw, UserView, ShortQuestionsView, LongQuestionsView


urlpatterns = [ 
        path('predict',PredictorVeiw.as_view(),name='') , 
        path ('long-questions',LongQuestionsView.as_view(),name="long-questions") ,
        path('short-questions',ShortQuestionsView.as_view(),name="short-questions") ,
        path('register',UserView.as_view(),name="user"),
]