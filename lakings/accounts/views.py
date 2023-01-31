from rest_framework.decorators import api_view
from .models import UserProfile, Items, ShoppingList
from rest_framework.response import Response
from django.db.models import Q
from rest_framework import status


@api_view(['POST'])
def register_account(request):
    username = request.data["username"]
    password = request.data["password"]

    suc = True

    if (len(UserProfile.objects.filter(username=username)) > 0):
        suc = False
    else:
        UserProfile.objects.create(
            username=username, password=password)

    userProfile = UserProfile.objects.filter(
        username=username, password=password)[0]
    return Response({
        "data": suc,
        "user_type": userProfile.is_staff,
        "user_id": userProfile.id
    })


@api_view(['POST'])
def login_account(request):
    username = request.data["username"]
    password = request.data["password"]

    suc = False

    if (len(UserProfile.objects.filter(username=username, password=password)) > 0):
        suc = True

    userProfile = UserProfile.objects.filter(
        username=username, password=password)[0]

    return Response({
        "data": suc,
        "user_type": userProfile.is_staff,
        "user_id": userProfile.id
    })


@api_view(['POST'])
def add_new_item(request):
    user_id = request.data["user_id"]
    name = request.data["name"]
    category = request.data["category"]
    price = request.data["price"]
    quantity = request.data["quantity"]

    suc = True

    if (len(Items.objects.filter(title=name)) > 0):
        suc = False
    else:
        Items.objects.create(title=name, category=category, price=price,
                             quantity=quantity, last_edit_user_id_id=user_id)

    return Response({
        "data": suc,
    })


@api_view(['POST'])
def get_item_list(request):
    keyword = request.data["keyword"]
    items = {}
    if keyword != "":
        items = Items.objects.filter(Q(title__icontains=keyword) | Q(
            category__icontains=keyword)).values()
    else:
        items = Items.objects.all().values()

    return Response({
        "data": items
    })


@api_view(['POST'])
def update_item(request):
    item_id = request.data["item_id"]
    category = request.data["category"]
    price = request.data["price"]
    quantity = request.data["quantity"]

    items = Items.objects.get(id=item_id)
    items.category = category
    items.price = price
    items.quantity = quantity
    items.save()

    return Response("Item Updated!", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def delete_item(request):
    item_id = request.data["item_id"]

    items = Items.objects.get(id=item_id)
    items.delete()

    return Response("Item Deleted!", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def add_new_shopping_list(request):
    user_id = request.data["user_id"]
    title = request.data["title"]
    item_id_array = request.data["item_id_array"]
    item_quantity_array = request.data["item_quantity_array"]
    is_done_array = request.data["is_done_array"]

    ShoppingList.objects.create(title=title, item_id=item_id_array, item_quantity=item_quantity_array,
                             is_done=is_done_array, user_id_id=user_id)

    return Response("Shopping List Created!", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def get_shopping_list(request):
    keyword = request.data["keyword"]
    user_id = request.data["user_id"]
    shoppingList = {}
    if keyword != "":
        shoppingList = ShoppingList.objects.filter(
            title__icontains=keyword, user_id_id=user_id).values()
    else:
        shoppingList = ShoppingList.objects.filter(user_id_id=user_id).values()

    return Response({
        "data": shoppingList
    })


@api_view(['POST'])
def delete_a_shopping_bag(request):
    list_id = request.data["list_id"]

    shoppingList = ShoppingList.objects.get(id=list_id)
    shoppingList.delete()

    return Response("Shopping Bag Deleted!", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def update_shopping_list(request):
    title = request.data["title"]
    item_id_array = request.data["item_id_array"]
    item_quantity_array = request.data["item_quantity_array"]
    is_done_array = request.data["is_done_array"]
    shop_id = request.data["shop_id"]

    shoppingList = ShoppingList.objects.get(id=shop_id)
    shoppingList.title = title
    ## Take off the bought Quantity
    if len(item_id_array) != 0:
        for i in range(len(item_id_array)):
            item = item_id_array[i]
            item = item.split('(')[0].replace(" ", "")
            itemobject = Items.objects.filter(title=item)[0]
            totalQuan = int(itemobject.quantity)
            if ((is_done_array[i]) and (shoppingList.is_done[i]=='False')):
                itemobject.quantity=totalQuan-int(item_quantity_array[i])
                itemobject.save()

    ## Update list
    shoppingList.item_id = item_id_array
    shoppingList.item_quantity = item_quantity_array
    shoppingList.is_done = is_done_array
    shoppingList.save()

    return Response("Shopping List Updated!", status=status.HTTP_201_CREATED)
