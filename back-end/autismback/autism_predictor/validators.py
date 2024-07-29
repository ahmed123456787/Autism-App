from rest_framework import serializers

        
def validate_questions_response(value):

    if any(not isinstance(i, int) or i < -2 or i > 2 for i in value):
        raise serializers.ValidationError('All the reponses of the questions must be integers between -2 and 2.')