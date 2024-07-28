from django.urls import path 
from .views import PredictorVeiw 


urlpatterns = [ 
        path('predictor',PredictorVeiw.as_view(),name='') , 
    ]