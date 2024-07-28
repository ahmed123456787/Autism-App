from django.db import models
import joblib 
import numpy as np 

def has_autism (data) : 
    
    model = joblib.load("C:/Users/asus/Desktop/Autism-App/back-end/autismback/autism_predictor/random_forest_classifier_autism_screener.joblib")
    data = np.array(data) 
    data = data.reshape(1,-1)
    return model.predict(data)[0]  # predict if the person is autism or no . 
