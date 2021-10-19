Créer une image avec les bonnes config
docker build .

Récupérer l'id de l'image
docker ps

Exécuter l'image dans un container 
docker run -it <image_id>

On arrive sur le bash du container (une machine linux légère)