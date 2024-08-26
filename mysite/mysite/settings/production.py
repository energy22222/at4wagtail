from .base import *

DEBUG = False

ALLOWED_HOSTS = ["aturcotte.pythonanywhere.com"]

try:
    from .local import *
except ImportError:
    pass
