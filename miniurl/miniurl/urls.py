from django.contrib import admin
from django.urls import path
from miniurl import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('urls/', views.miniurl_list),
    path('urls/<str:mini_url_id>', views.miniurl_detail),
    path('<str:mini_url_id>/stats', views.stats_redirect),
    path('<str:mini_url_id>', views.miniurl_redirect),
]
