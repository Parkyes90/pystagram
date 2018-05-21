from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views import defaults as default_views

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(settings.ADMIN_URL, admin.site.urls),
    url(
        regex='^rest-auth/',
        view=include('rest_auth.urls')
    ),
    url(
        regex='^rest-auth/registration/',
        view=include('rest_auth.registration.urls')
    ),
    url(
        regex=r"^users/",
        view=include(
            "pystagram.users.urls",
            namespace="users"
        )
    ),
    url(
        regex=r"^images/",
        view=include(
            "pystagram.images.urls",
            namespace="images"
        )
    ),
    url(regex=r"^notifications/",
        view=include(
            "pystagram.notifications.urls",
            namespace="notifications"
        )
        ),
    url(
        regex=r"^accounts/",
        view=include("allauth.urls")
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(
            regex=r"^400/$",
            view=default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        url(
            regex=r"^403/$",
            view=default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        url(
            regex=r"^404/$",
            view=default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        url(
            regex=r"^500/$",
            view=default_views.server_error
        ),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [
            url(
                regex=r"^__debug__/",
                view=include(debug_toolbar.urls)
            )
        ] + urlpatterns
