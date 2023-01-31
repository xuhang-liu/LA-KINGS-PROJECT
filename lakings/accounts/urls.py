from django.urls import path
from .views import register_account, login_account, add_new_item, get_item_list, update_item, delete_item, add_new_shopping_list, get_shopping_list\
,delete_a_shopping_bag, update_shopping_list

urlpatterns = [
    path('register-new-user', register_account),
    path('login-account', login_account),
    path('add-new-item', add_new_item),
    path('get-item-list', get_item_list),
    path('update-item', update_item),
    path('delete-item', delete_item),
    path('add-new-shopping-list', add_new_shopping_list),
    path('get-shopping-list', get_shopping_list),
    path('delete-a-shopping-bag', delete_a_shopping_bag),
    path('update-shopping-list', update_shopping_list),
]
