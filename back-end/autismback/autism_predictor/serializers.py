from rest_framework import serializers 
def validate_params(value):
    
    if not all(-2 <= i <= 2 for i in value):
        raise serializers.ValidationError("All elements in the list must be between -2 and 2.")
 
class PredictorSerializer (serializers.Serializer) :
    
    params = serializers.ListField (child = serializers.IntegerField() , 
                                                  min_length=51,
                                                  max_length=51
                                    ,validators = [validate_params]             )