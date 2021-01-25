# Carte interactive du métro de Paris

Alma-Marceau, Barbès-Rochechouart, Dugommier ou encore Marx Dormoy. Si vous empruntez le métro parisien, ces noms vous disent forcément quelque chose. Mais sauriez-vous resituer leur époque ou même le domaine qui a rendu ces personnes célèbres ?  

Les stations de métro portent le plus souvent le nom de rues ou de quartiers qu’elles desservent, mais il existe en fait une multitude d’histoires à raconter autour de ces noms. Cette application vous propose d’en détailler la provenance en développant de manière très succincte les éléments historiques associés.  

Parcourez l’Histoire de France et (re)découvrez l’origine des noms des 303 stations du métro parisien !


(Ne marche pour l'instant que sur Android)

![caption](pyscripts_and_misc/demo_24jan.gif)
  
  
  
## Installation

Assurez-vous que nodeJS et npm soient installés. Munissez-vous d'un téléphone Android (physique ou émulateur).  

Dans un 1er terminal lancez `npm install && npm run start`. Dans un 2nd terminal, lancez `npm run android`.


## gmaps API key

Une clef API gmaps, restreinte à l'API "maps SDK for Android", est visible (en clair) dans le code source. Cette clef ne permet que l'utilisation des services gratuits.

(billable requests: quota set to 0/day, 0/minute, 0/min/user).


## Infos diverses

les petites histoires sont entierement faites a la main par Baptiste Pitel, quel boss !

"mdr j'invente rien hein ! merci internet ! y'a déjà un dico de dispo et ensuite j'affine avec des infos supplémentaires ou j'enlève le superflu" 

Et en plus il est modeste...

Les donnees relatives au metro ont ete recuperees ici :
- https://data.iledefrance-mobilites.fr/explore/dataset/emplacement-des-gares-idf/export/?refine.mode=Metro
- https://data.iledefrance-mobilites.fr/explore/dataset/traces-du-reseau-ferre-idf/export/?refine.mode=Metro
- https://data.ratp.fr/explore/dataset/pictogrammes-des-lignes-de-metro-rer-tramway-bus-et-noctilien/information/


Les données (emplacements géographiques et tracés des lignes) sont sous License ouverte (Etalab) : https://www.etalab.gouv.fr/wp-content/uploads/2014/05/Licence_Ouverte.pdf
L'utilisation des pictrogrammes se fait en accord avec les CGU : http://data.ratp.fr/page/cgu_ratp

Cette application est un "réutilisateur" de ces données, conformément a la license citée.  
Merci à la RATP d'avoir gracieusement mis à disposition ces données

>Toute reproduction et représentation des Eléments Cartographiques et des Logotypes devront être strictement fidèles à leur original tel que téléchargeable à partir du Service et notamment sans modification d’association entre les lignes et les couleurs, ni altération des couleurs et/ou des indices propres aux Eléments Cartographiques.