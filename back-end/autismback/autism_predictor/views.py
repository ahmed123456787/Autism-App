from django.shortcuts import render 
from  rest_framework.views import APIView 
from rest_framework.response import  Response
from .serializers import PredictorSerializer
from rest_framework.status import HTTP_200_OK , HTTP_400_BAD_REQUEST 
from .models import has_autism



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