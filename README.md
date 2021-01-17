# Carte interactive du métro de Paris

Le métro de notre belle capitale regorge de jolies histoires à raconter. Apprenez en plus sur les noms des arrêts, les choses à faire autour, et bien plus encore (lorsque le projet sera fini) !

## Prérequis (à l'installation)
nodeJS, npm

## Installation
'npm install && npm run start'

'npm run android' in a 2nd terminal

## Ce qui a été fait (17 janvier)
- Un écran avec 2 scrollviews (nested car react native ne prend pas en charge le scrolling dans les 2 directions)
- Dans ce 1er écran : la carte, un bouton pour aller dans le 2nd écran avec en paramètre un string
- Un 2e écran

## Ce qui sera fait sous peu
- Récupérer la position sur la carte de chaque arrêt de métro

- position sur écran -> position sur carte

- L'utilisateur essaie d'ouvrir un arrêt de métro : la position sur carte correspond à un arrêt ? Si oui, ouvrir 2e écran

- Mettre le texte correspondant à chaque arrêt de métro au 2e écran

