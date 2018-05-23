from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os


# noinspection PyUnusedLocal,PyMethodMayBeStatic
class ReactAppView(View):

    def get(self, request):
        try:
            path = os.path.join(
                str(settings.ROOT_DIR),
                'client',
                'build',
                'index.html'
            )
            with open(path) as file:
                return HttpResponse(file.read())
        except Exception as e:
            return HttpResponse(str(e), status=501)
