from django.shortcuts import render 
from  rest_framework.views import APIView 
from rest_framework.response import  Response
from .serializers import PredictorSerializer, UserSerializer,ShortQuestionsSerializer, LongQuestionsSerializer
from rest_framework.generics import ListAPIView, ListCreateAPIView , CreateAPIView
from rest_framework.status import HTTP_200_OK , HTTP_400_BAD_REQUEST 
from .models import has_autism, Users, ShortQuestions, LongQuestions 



class PredictorVeiw (APIView):
    
    def get_queryset(self):
        # Return an empty queryset as we're not using it
        return []
    
    def post (self,request) : 
        data = request.data 
        serializer_obj = PredictorSerializer(data=data)
        
        if (serializer_obj.is_valid(raise_exception=True)) :
            
            if has_autism(data['params'])  :
               response = { 
                 "message" : "you have the autism"} 
               return Response (response ,status=HTTP_200_OK) 
            
            else : 
                response =  {
                    "message" : "you dont have the autism"
                }
                return Response (response,status=HTTP_200_OK)       
        else :
            return Response ("",status=HTTP_400_BAD_REQUEST)
        

class LongQuestionsView (ListAPIView) :
    queryset = LongQuestions.objects.all() 
    serializer_class = LongQuestionsSerializer
    
    
class ShortQuestionsView (ListAPIView) :
    queryset = ShortQuestions.objects.all() 
    serializer_class = ShortQuestionsSerializer    
     
     
            
class UserView (CreateAPIView) :
    queryset = Users.objects.all()
    serializer_class  = UserSerializer
                