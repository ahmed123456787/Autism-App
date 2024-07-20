from django.db import models
import joblib 
X_test = [2  for i in range(51) ]
mdl = joblib.load(__file__+ "/../" +"random_forest_classifier_autism_screener.joblib")
print(mdl)