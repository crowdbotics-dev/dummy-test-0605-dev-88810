"""
WSGI config for dummy_test_0605_dev_88810 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dummy_test_0605_dev_88810.settings')

application = get_wsgi_application()
