from django.urls import path
from .views import add_new_job, get_all_jobs, update_job, archive_job, add_new_apply_candidate, get_current_jobs, \
    add_interview_question, update_invite_status, delete_job, get_jobid_list, update_viewed_status, get_zr_xml, \
    add_new_apply_candidate_from_zr, getCompanyBrandingInfo, get_resume_from_job_application, get_zr_premium_xml, \
    create_merge_link_token, retrive_merge_account_token, send_merge_api_request, check_free_account_active_jobs, \
    add_cand_from_merge, check_interview_candidates_num, get_pipeline_analytics, add_new_apply_candidate_by_cv, \
    check_id_master_active, check_subreviewer_currentstage, greenhouse_api_test, greenhouse_update_invite_status, greenhouse_get_interview_stages, \
    update_applicant_basic_info, switch_job_closed_status, assign_credit_to_job, receive_email_from_cloudmail, get_most_recent_job, \
    premium_job_payment_suc, check_premium_job_list, send_email_from_cloudmail, get_single_job_details, get_email_message_list, \
    add_new_apply_candidate_from_drjob, create_new_sourcing_request, get_sourcing_request_status, sourcing_request_payment_suc

urlpatterns = [
    path('add-new-job', add_new_job),
    path('get-all-jobs', get_all_jobs),
    path('update-job', update_job),
    path('archive-job', archive_job),
    path('add-new-apply-candidate', add_new_apply_candidate),
    path('apply-job/<str:companyName>/get-current-jobs', get_current_jobs),
    path('add-interview-question', add_interview_question),
    path('update-invite-status', update_invite_status),
    path('jobs/delete-job', delete_job),
    path('get-jobid-list', get_jobid_list),
    path('jobs/update-viewed-status', update_viewed_status),
    path('jobs/get-zr-xml', get_zr_xml),
    path('jobs/add-new-apply-candidate-from-zr', add_new_apply_candidate_from_zr),
    path('jobs/add-new-apply-candidate-from-drjob', add_new_apply_candidate_from_drjob),
    path('company-branding/<str:companyName>/get-company-branding-info', getCompanyBrandingInfo),
    path('jobs/get-resume-from-job-application', get_resume_from_job_application),
    path('jobs/get-zr-premium-xml', get_zr_premium_xml),
    path('jobs/create-merge-link-token', create_merge_link_token),
    path('jobs/retrieve-merge-account-token', retrive_merge_account_token),
    path('jobs/send-merge-api-request', send_merge_api_request),
    path('jobs/check-free-account-active-jobs', check_free_account_active_jobs),
    path('jobs/add-cand-from-merge', add_cand_from_merge),
    path('job/check-interview-candidates-num', check_interview_candidates_num),
    path('jobs/get-pipeline-analytics', get_pipeline_analytics),
    path('jobs/add-new-apply-candidate-by-cv', add_new_apply_candidate_by_cv),
    path('jobs/check_if_master_active', check_id_master_active),
    path('jobs/check_subreviewer_currentstage', check_subreviewer_currentstage),
    path('jobs/greenhouse-api-test', greenhouse_api_test),
    path('jobs/greenhouse-update-invite-status', greenhouse_update_invite_status),
    path('jobs/greenhouse-get-interview-stages', greenhouse_get_interview_stages),
    path('jobs/update-applicant-basic-info', update_applicant_basic_info),
    path('jobs/switch-job-closed-status', switch_job_closed_status),
    path('jobs/assign-credit-to-job', assign_credit_to_job),
    path('jobs/receive-email-from-cloudmail', receive_email_from_cloudmail),
    path('jobs/get-most-recent-job', get_most_recent_job),
    path('jobs/premium-job-payment-suc', premium_job_payment_suc),
    path('jobs/check-premium-job-list', check_premium_job_list),
    path('jobs/send-email-from-cloudmail', send_email_from_cloudmail),
    path('jobs/get-single-job-details', get_single_job_details),
    path("jobs/get-email-message-list", get_email_message_list),
    path("jobs/create-new-sourcing-request", create_new_sourcing_request),
    path('jobs/get-sourcing-request-status', get_sourcing_request_status),
    path('jobs/sourcing-request-payment-suc', sourcing_request_payment_suc)
]