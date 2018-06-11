from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = "pystagram.users"
    verbose_name = "Users"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """
        try:
            from .signals import user_signed_up  # noqa F401
        except ImportError:
            pass
