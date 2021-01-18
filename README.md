# Carte interactive du métro de Paris

Le métro de notre belle capitale regorge de jolies histoires à raconter. Apprenez en plus sur les noms des arrêts, les choses à faire autour, et bien plus encore (lorsque le projet sera fini) !

Ne marche pour l'instant que sur Android

## Prérequis (à l'installation)
nodeJS, npm, et un device : soit un tel android, soit un émulateur android (android studio, genymotion, ou autre)

## Installation
'npm install && npm run start'

'npm run android' in a 2nd terminal

## Ce qui a été fait (17 janvier)
- Un 1er écran : la carte, un bouton pour aller dans le 2nd écran avec en paramètre un string
- Un 2e écran

## Ce qui sera fait sous peu
- Récupérer la position sur la carte de chaque arrêt de métro

- position sur écran -> position sur carte

- L'utilisateur essaie d'ouvrir un arrêt de métro : la position sur carte correspond à un arrêt ? Si oui, ouvrir 2e écran

- Mettre le texte correspondant à chaque arrêt de métro au 2e écran

- déployer une version web, en page github (react-native-web)

# gmaps API key

Une clef API gmaps est en clair dans le code source. Cette clef est restreinte à l'API "maps SDK for Android" et ne permet que l'utilisation des services gratuits, ce qui empêche toute utilisation mal intentionnée

(billable requests: quota set to 0/day, 0/minute, 0/min/user).

# Au sujet des textes du 2e ecran
les petites histoires sont entierement faites a la main par Baptiste Pitel, quel boss !

"mdr j'invente rien hein ! merci internet ! y'a déjà un dico de dispo et ensuite j'affine avec des infos supplémentaires ou j'enlève le superflu" 

Et en plus il est modeste...