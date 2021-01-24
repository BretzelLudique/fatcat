# Carte interactive du métro de Paris

Alma-Marceau, Barbès-Rochechouart, Dugommier ou encore Marx Dormoy. Si vous empruntez le métro parisien, ces noms vous disent forcément quelque chose. Mais sauriez-vous resituer leur époque ou même le domaine qui a rendu ces personnes célèbres ? 
Les stations de métro portent le plus souvent le nom de rues ou de quartiers qu’elles desservent, mais il existe en fait une multitude d’histoires à raconter autour de ces noms. Cette application vous propose d’en détailler la provenance en développant de manière très succincte les éléments historiques associés. 
Parcourez l’Histoire de France et (re)découvrez l’origine des noms des 303 stations du métro parisien !


Ne marche pour l'instant que sur Android

![caption](pyscripts_and_misc/demo_24jan.gif)
  
  
  
## Installation

### Prerequis

nodeJS, npm, et un device : soit un tel android, soit un émulateur android (android studio, genymotion, ou autre)

### Lancement

'npm install && npm run start'

'npm run android' in a 2nd terminal

## Ce qui a été fait
- Un 1er écran : la carte (gmaps API), un marker par arret, l'affichage de markerclusters lorsque dezoom
- Un 2e écran

## Ce qui sera fait sous peu

- Mettre le texte correspondant à chaque arrêt de métro au 2e écran

- déployer une version web, en page github (react-native-web)

## gmaps API key

Une clef API gmaps est en clair dans le code source. Cette clef est restreinte à l'API "maps SDK for Android" et ne permet que l'utilisation des services gratuits, ce qui empêche toute utilisation mal intentionnée

(billable requests: quota set to 0/day, 0/minute, 0/min/user).

## Infos diverses

les petites histoires sont entierement faites a la main par Baptiste Pitel, quel boss !

"mdr j'invente rien hein ! merci internet ! y'a déjà un dico de dispo et ensuite j'affine avec des infos supplémentaires ou j'enlève le superflu" 

Et en plus il est modeste...

Les donnees relatives au metro ont ete recuperees ici :
- https://data.iledefrance-mobilites.fr/explore/dataset/emplacement-des-gares-idf/export/?refine.mode=Metro
- https://data.iledefrance-mobilites.fr/explore/dataset/traces-du-reseau-ferre-idf/export/?refine.mode=Metro
- https://data.ratp.fr/explore/dataset/pictogrammes-des-lignes-de-metro-rer-tramway-bus-et-noctilien/information/


Ces donnees sont sous License ouverte (Etalab), consultable : https://www.etalab.gouv.fr/wp-content/uploads/2014/05/Licence_Ouverte.pdf

Cette application est un Reutilisateur de ces donnees, conformement a la license citee. Merci a la RATP pour avoir gracieusement mis a disposition ces donnees, ce qui a economise un travail fastidieux
