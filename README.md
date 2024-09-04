#version 2024-08-28 de at4wagtail (essai de wagtail)  

  

en mode apprentissage de wagtail et django avec les versions suivantes :  
Django>=4.2,<5.1
wagtail>=5.2,<5.3
wagtailmenus==4.0
python-dotenv==1.0.1  (vs le setup 

 

À partir de l’adresse <https://docs.wagtail.org/en/stable/getting_started/quick_install.html#>  

#sur linux : créez un environnement virtuel  

python -m venv mysite/env 
# Then: 
source mysite/env/bin/activate 

 

#cloner le code source  
git clone https://github.com/energy22222/at4wagtail.git 
#ca va donner les répertoires   
# mysite / at4wagtail / mysite 

 

#installer wagtail et ses dépendances  
#pip install wagtail est remplacé par :  
pip install -r requirements.txt 
 

#pour créer la bd SQLite  
python manage.py migrate 

#creer le user administrateur 
python manage.py createsuperuser 

#démarrer le serveur  
python manage.py runserver 

#aller dans la console d'admin wagtail  
http://127.0.0.1:8000/admin  

 
#créer via la console d'admin de wagtail :  
-la page d'Index : blog index page (avec le slug = "blog") 
-la page de tags : …. (avec le slug = "tags")  
-créez au moins un auteur (via le menu "fragments") 
-créez une première entrée du blog via une page "blog page" qui est "enfant" de la page "blog index page"  
 

 

Ajout de wagtailmenus  

Voir la procédure d'installation via ce lien https://wagtailmenus.readthedocs.io/en/stable/installation.html 

 