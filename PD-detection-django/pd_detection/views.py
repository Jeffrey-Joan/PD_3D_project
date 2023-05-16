from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
import json
from pathlib import Path
from PIL import Image
import os
import numpy as np
from keras.models import load_model
import itertools
import nibabel as nib

def resize_data(data):
    initial_size_x = data.shape[0]
    initial_size_y = data.shape[1]
    initial_size_z = data.shape[2]

    new_size_x = 144
    new_size_y = 144
    new_size_z = 96

    delta_x = initial_size_x / new_size_x
    delta_y = initial_size_y / new_size_y
    delta_z = initial_size_z / new_size_z

    new_data = np.zeros((new_size_x, new_size_y, new_size_z))

    for x, y, z in itertools.product(range(new_size_x),
                                     range(new_size_y),
                                     range(new_size_z)):
        new_data[x][y][z] = data[int(x * delta_x)][int(y * delta_y)][int(z * delta_z)]

    return new_data
# Create your views here.
@csrf_exempt
def getImage(request):
    data = request.FILES['myfile']
    # print(data)
    file_name = default_storage.save(data.name.replace(" ",""), data)
    # file_name = file_name.replace(" ","")
    file_url = default_storage.url(file_name)
    imagePath =  'D:/Mini Project/brain-tumour-detection-django'+file_url
    #vector =  cv2.imread(imagePath)
    resizedVector = resize_data((nib.load(imagePath).get_fdata()))
    print(resizedVector.shape)
    # npVectorArray = np.zeros((240,240,3))
    resizedNumpyVector = np.asarray(resizedVector)
    # resizedNumpyVector = resizedNumpyVector/255
    resizedNumpyVector = resizedNumpyVector.reshape(1,144,144,96,1)
    
    brainTumourClassifier = load_model(r'Downloads\three_d_image_classification.h5')
    result = brainTumourClassifier.predict(resizedNumpyVector)
    print(result)
    newResult = np.argmax(result)
    print(newResult)
    responseArray = ["Patient does not have PD","Patient has PD"]
    newResult = responseArray[newResult]
    return HttpResponse(json.dumps({"result":newResult}))




