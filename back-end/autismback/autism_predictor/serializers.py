from rest_framework import serializers 
from .models import Users , ShortQuestions , LongQuestions
from .validators import * 

 
class PredictorSerializer (serializers.Serializer) :
    
    params = serializers.ListField (child = serializers.IntegerField() , 
                                                  min_length=51,
                                                  max_length=51
                                    )
    

class UserSerializer(serializers.ModelSerializer) :
    questions_response = serializers.JSONField(validators=[validate_questions_response])
    class Meta  :
        model = Users
        fields = "__all__" 
        
        
class  ShortQuestionsSerializer (serializers.ModelSerializer) :
    class Meta : 
        model = ShortQuestions
        fields = "__all__"    
        
        

class  LongQuestionsSerializer (serializers.ModelSerializer) :
    class Meta : 
        model = LongQuestions   
        fields = "__all__"      