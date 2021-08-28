from django.urls import path,include
from .api.api import ResgisterAPI, LoginAPI, UserAPI, RetrieveProfileAPI, UpdateProfileAPI, RetrievePracticeInfoAPI, Employer_ResgisterAPI, \
    RetrieveInterviewJobAPI
from knox import views as knox_views
from .views import sign_s3_upload, ActivateAccount, upgrade_accounts, \
    resend_activation_email, update_user_email, update_user_password, \
    check_password, get_user_fullname, get_ziprecruiter_jobs, check_user_registration, get_company_name, \
    update_record, get_record_status, get_received_interview, update_record_refresh, employer_notification, \
    get_profile_detail, create_or_update_personal_info, create_or_update_social_media, create_or_update_basic_info, \
    create_or_update_video, create_or_update_summary, create_or_update_resume, create_or_update_education, create_or_update_work_exp, \
    upload_profile_resume, upload_profile_video, create_or_update_profile_rate, subreviewer_update_comment, get_employer_profile_detail, \
    create_or_update_employer_info, create_or_update_employer_social_media, create_or_update_employer_basic_info, create_or_update_employer_video, \
    create_or_update_employer_summary, upload_employer_profile_video, get_employer_post, update_employer_post, add_employer_post, delete_employer_post, \
    upload_employer_logo, create_or_update_employer_logo, upload_user_logo, create_or_update_user_logo, check_user_existence, check_company_name_existence, \
    create_profile, create_or_update_job_type, create_or_update_skills, create_or_update_languages, create_or_update_profile_sharing, create_employer_profile, \
    check_freetrial_expire, get_sourcing_data, check_user_name
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

    ### get user's practice information
    path('get_practice_info/<int:userId>', RetrievePracticeInfoAPI.as_view()),
    ### get employer's posted jobs and interviews info
    path('get_interview_job/<int:employerId>', RetrieveInterviewJobAPI.as_view()),
    ### email confirm ###
    path('activate/<uidb64>/<token>/', ActivateAccount.as_view(), name='activate'),

    ### Profile ###
    path('get_profile', RetrieveProfileAPI.as_view()),
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

    ### get company name
    path('get-company-name', get_company_name, name="get company name"),

    ### update video records status
    path('update-record', update_record, name="update record"),

    ### send employer notification
    path('employer-notification', employer_notification, name="employer notification"),

    ### update video records status after refresh
    path('update-record-refresh', update_record_refresh, name="update record refresh"),

    ### get video records status
    path('get-record-status', get_record_status, name="get record status"),

    ### get received interview info
    path('get-received-interview', get_received_interview, name="get received interview"),

    # profile detail
    path('get-profile-detail', get_profile_detail, name="get profile detail"),
    path('update-personal-info', create_or_update_personal_info, name="create or update personal info"),
    path('update-social-media', create_or_update_social_media, name="create or update socail media"),
    path('update-basic-info', create_or_update_basic_info, name="create or update basic info"),
    path('update-video', create_or_update_video, name="create or update video"),
    path('update-summary', create_or_update_summary, name="create or update summary"),
    path('update-resume', create_or_update_resume, name="create or update resume"),
    path('update-education', create_or_update_education, name="create or update education"),
    path('update-work-exp', create_or_update_work_exp, name="create or update work exp"),
    path('upload-profile-resume', upload_profile_resume, name="upload profile resume"),
    path('upload-profile-video', upload_profile_video, name="upload profile video"),
    path('update-profile-rate', create_or_update_profile_rate, name="upload profile rate"),
    path('accounts/update-job-type', create_or_update_job_type, name="create or update job type"),
    path('accounts/update-skills', create_or_update_skills, name="create or update skills"),
    path('accounts/update-languages', create_or_update_languages, name="create or update languages"),
    path('accounts/update-profile-sharing', create_or_update_profile_sharing, name="create or update profile sharing"),
    ### send subreviewer update comment notification
    path('subreviewer_update_comment', subreviewer_update_comment, name="subreviewer update comment"),
    # employer profile
    path('get-employer-profile-detail', get_employer_profile_detail, name="get employer profile detail"),
    path('update-employer-info', create_or_update_employer_info, name="create or update employer info"),
    path('update-employer-social-media', create_or_update_employer_social_media, name="create or update employer social media"),
    path('update-employer-basic-info', create_or_update_employer_basic_info, name="create or update employer basic info"),
    path('update-employer-video', create_or_update_employer_video, name="create or update employer video"),
    path('update-employer-summary', create_or_update_employer_summary, name="create or update employer summary"),
    path('update-employer-profile-video', upload_employer_profile_video, name="upload employer profile video"),
    path('accounts/create-employer-profile', create_employer_profile, name="create employer profile"),
    # employer post
    path('get-employer-post', get_employer_post, name="get employer post"),
    path('update-employer-post', update_employer_post, name="update employer post"),
    path('add-employer-post', add_employer_post, name="add employer post"),
    path('delete-employer-post', delete_employer_post, name="delete employer post"),
    path('upload-employer-logo', upload_employer_logo, name="upload employer logo"),
    path('update-employer-logo', create_or_update_employer_logo, name="update employer logo"),
    path('upload-user-logo', upload_user_logo, name="upload user logo"),
    path('update-user-logo', create_or_update_user_logo, name="update user logo"),
    path('accounts/check-user-existence', check_user_existence, name="check user existence"),
    path('accounts/check-company-name-existence', check_company_name_existence, name="check user existence"),
    path('accounts/create-profile', create_profile, name="create user profile"),

    # employer free trial
    path('api/check_freetrial_expire', check_freetrial_expire, name="check user free trial"),
    path('accounts/get-sourcing-data', get_sourcing_data, name="get sourcing data"),
    path('accounts/check-user-name', check_user_name, name="check user name"),
]

