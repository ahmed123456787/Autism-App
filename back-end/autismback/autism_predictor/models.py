from django.db import models
import joblib 
import numpy as np 
from .question import Question


class Users (models.Model) : 
    
    GENDER_CHOICES = [
        
        ('M', 'Male'),
        ('F', 'Female'),
    ]
     
        
    name = models.CharField(max_length=255) 
    age = models.SmallIntegerField() 
    sex = models.CharField(max_length=1,choices=GENDER_CHOICES)
    question_type = models.CharField(max_length=10,choices=Question.QUESTION_TYPE_CHOICES)
    questions_response = models.JSONField()
    
    
    class Meta : 
        db_table = "Users"
    
    def __str__ (self) : 
        return self.name
    
    
    
    
class ShortQuestions (models.Model) : 
    
    announcement = models.CharField(max_length=255)
    category  = models.CharField(max_length=255,choices=Question.QUESTIONS_CATEGORY)
     
     
    def __str__ (self) : 
        return self.category       



class LongQuestions (models.Model) : 
    
    announcement = models.CharField(max_length=255)
    category  = models.CharField(max_length=255,choices=Question.QUESTIONS_CATEGORY)
    
    def __str__ (self) : 
        return self.category

class Stats(models.Model) : 
    pass









def has_autism (data) : 
    
    model = joblib.load("C:/Users/asus/Desktop/Autism-App/back-end/autismback/autism_predictor/random_forest_classifier_autism_screener.joblib")
    data = np.array(data) 
    data = data.reshape(1,-1)
    return model.predict(data)[0]  # predict if the person is autism or no.