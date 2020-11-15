import boto
# import mimetypes
import json
from django.http import HttpResponse
import os
from dotenv import load_dotenv
from .models import Resume
from rest_framework.decorators import api_view
from rest_framework.response import Response
load_dotenv()

if not boto.config.get('s3', 'use-sigv4'):
    boto.config.add_section('s3')
    boto.config.set('s3', 'use-sigv4', 'True')
boto.config.set('s3', 'host', 's3.amazonaws.com')

conn = boto.connect_s3(os.getenv("AWSAccessKeyId"), os.getenv("AWSSecretKey"))


def sign_s3_upload_cv(request):
    print("===== cv sign api called =======")
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("CV_Bucket"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

@api_view(['POST'])
def delete_resume(request):
    id = request.data["id"]
    Resume.objects.filter(id=id).delete()
    return Response({"deleted_cv_id": id})
