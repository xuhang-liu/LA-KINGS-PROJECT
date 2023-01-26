from rest_framework import serializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from rest_framework.serializers import SerializerMethodField
from accounts.models import Profile
from rest_framework.validators import UniqueValidator

# User serializer
class UserSerializer(serializers.ModelSerializer):
    groups = SerializerMethodField()
    class Meta:
        model = User
        fields = ('id','username','email','groups', 'last_login')

    def get_groups(self, obj):
        return [group.name for group in obj.groups.all()]


# Profile serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all(),message="Email Already Exist.")]
            )
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all(), message="Username Already Exist.")]
            )
    password = serializers.CharField(min_length=8)
    class Meta:
        model = User
        fields = ('id','username','email', 'password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
        user.is_active = True
        user.save()
        return user
        
        
# Login serializer
class LoginSerializer(serializers.Serializer): #not creating a user, just validating so just Serializer
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):  # from django auth, rest_framework, knox documentation
        # enable both username and email authentication
        # parse data, refer to python orderedDict()
        items = list(data.items())
        username = items[0][1]
        password = items[1][1]
        # if login with email, convert email to username
        if '@' in username:
            username = User.objects.get(email=username).username
        user = authenticate(username=username, password=password)

        # user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credientials")
