from django.urls import path,include
from .api.api import ResgisterAPI, LoginAPI, UserAPI, RetrieveProfileAPI, UpdateProfileAPI, Employer_ResgisterAPI
from knox import views as knox_views
from .views import sign_s3_upload, ActivateAccount, upgrade_accounts, resend_activation_email, update_user_email,\
    update_user_password, check_password, get_user_fullname, get_ziprecruiter_jobs, check_user_registration
from .api.social_login import exchange_token

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', ResgisterAPI.as_view()),
    path('api/auth/employer_register', Employer_ResgisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/userfullname', get_user_fullname, name='get user fullname'), 
    path('api/auth/logout', knox_views.LogoutView.as_view(),name="knox_logout"), # invalidate the token

    ### email confirm ###
    path('activate/<uidb64>/<token>/', ActivateAccount.as_view(), name='activate'),

    ### Profile ###
    path('get_profile',RetrieveProfileAPI.as_view()),
    path('profile/<int:id>/', UpdateProfileAPI.as_view()),

    ### AWS S3 signed url ###
    path('sign_auth',sign_s3_upload),

    ### social login token exchange ###
    path('exchange_token/<backend>',exchange_token),
    
    ### reset password ###
    path('password_reset',auth_views.PasswordResetView.as_view(template_name="accounts/password_reset.html"),name='password_reset'),
    path('password_reset_done',auth_views.PasswordResetDoneView.as_view(template_name="accounts/password_reset_sent.html"),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name="accounts/password_reset_new_password.html"),name='password_reset_confirm'),
    path('password_reset_complete',auth_views.PasswordResetCompleteView.as_view(template_name="accounts/password_reset_done.html"),name='password_reset_complete'),

    ### Upgrade Accounts
    path('api/upgrade-accounts', upgrade_accounts, name='upgrade accounts'),

    ### Resend Activation Email
    path('api/resend-activation-email', resend_activation_email, name='resend activation email'),

    ### Update User Email
    path('api/update-user-email', update_user_email, name='update user email'),
    ### Update User Password
    path('api/update-user-password', update_user_password, name='update user password'),
    ### Check the Password
    path('api/check_password', check_password, name='check password'),

    ### get ziprecruiter jobs
    path('get-ziprecruiter-jobs', get_ziprecruiter_jobs, name='get ziprecruiter jobs'),

    ### check user registration
    path('check-user-registration', check_user_registration, name="check user registration"),
]

