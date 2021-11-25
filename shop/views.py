from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
#@csrf_protect(['GET', 'POST', 'DELETE'])
@api_view(['GET', 'POST', 'DELETE'])
def ListProducts(request): 
  if request.method == 'GET':
    product = Product.objects.all()

    name = request.GET.get('name', None)
    if name is not None:
      product = product.filter(name__icontains=name)
    serializer_class = ProductSerializer(product, many=True)
    return JsonResponse(serializer_class.data, safe=False)

    productCode = request.GET.get("productCode", None)
    if productCode is not None:
      product = product.filter(productCode__icontains=productCode)
    serializer_class = ProductSerializer(product, many=True)
    return JsonResponse(serializer_class.data, safe=False)

  elif request.method == 'POST':
    product_data = JSONParser().parse(request)
    serializer_class = ProductSerializer(data=product_data)
    if serializer_class.is_valid():
      serializer_class.save()
      return JsonResponse(serializer_class.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    count = Product.objects.all().delete()
    return JsonResponse({'message': '{} Products were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'PUT', 'DELETE'])

def DetailProduct(request, pk):
    try: 
      product= Product.objects.get(pk=pk) 
    except Product.DoesNotExist: 
      return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
      serializer_class = ProductSerializer(product) 
      return JsonResponse(serializer_class.data) 
 
    elif request.method == 'PUT': 
      product_data = JSONParser().parse(request) 
      serializer_class = ProductSerializer(product, data=product_data) 
      if serializer_class.is_valid(): 
        serializer_class.save() 
        return JsonResponse(serializer_class.data) 
      return JsonResponse(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
      product.delete() 
      return JsonResponse({'message': 'Product was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    