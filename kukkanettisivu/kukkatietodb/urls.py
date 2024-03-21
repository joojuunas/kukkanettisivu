from django.urls import path
from . import views

app_name = "kukkatietodb"
urlpatterns = [
    path("kukat/", views.IndexView.as_view(), name="index"),
    path("kukat/<slug:id>/", views.DetailView.as_view(), name="detail"),
    path("prices/<int:id>", views.PriceView.as_view(), name="price"),
    path("prices/", views.ListPricesView.as_view(), name="listPrices"),
    path("images/<int:id>", views.ImageView.as_view(), name="images"),
    path("images/", views.ListImagesView.as_view(), name="listImages"),
]
