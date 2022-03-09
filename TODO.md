[Discussion 07-03-2022]

- [] # Lagues dans l'application

- [] # M manquants sur la carte (voir si change avec le zoom )

- [] # Mesurer les perfs:
performance.now + memoryUsage()
Date.now() - t0

- [] # Regarder descendre la qualité de l'image du M (éventuellement en svg) ?

- [] # Clustering: voir si react-native-map-clustering fonctionne correctement avec code déjà en place (a priori ok !): appel de chaque méthode. Chaque intéraction avec Mapview fonctionne encore ?
 --> si pas d'impact remplacer par clustering

- [] # Discuter avec Pitouf les images par stations + Vision globale sur l'appli

- [] # afficher nom des arrets a partir dun certain zoom


-----------------------------------------------------------------------------------------------------------------------------
afficher le nom des arrets, recuperer niveau de zoom 
    (ne pas oublier de le mettre en children de map)
    disparition du nom quand on clique sur la station (car affiché dans callout)
        (ne pas oublier ComponentDidMount => {})
        https://www.architecture-art-deco.fr/images/metro/Station%20metro%20Abbesses%20Art%20Nouveau.jpg


2e ecran:
    relief https://img.gadgethacks.com/img/47/20/63683852113528/0/compared-5-best-reddit-apps-for-android.w1456.jpg
    /center, gras, assez gros{stopName}
    textbody justifie
    position de l'arret dans le clasement des frequentations (donnees opendata 2019 ratp)


jolies icones ici https://github.com/oblador/react-native-vector-icons

Combobox/listbox sur 302 arrets : lorsque selectionné, preselectionne arret sur map
    lorsque selection de recherche, animation carte et noms des arrets (disparition des non selectionnes)

5. voir si peut mettre tous les cercles de la même taille (peu importe le nombre dans le cluster)

button dans rn-paper (+icone?) : retour cartes

zoom au 1er clic (desactiver possibilite de showcallout)

QUIZZ:
un nom d'arret est affiché aléatoirement, ainsi que les pictos de toutes les lignes
l'utilisateur doit cliquer sur le pictogramme de la bonne ligne
si l'arrêt se situe sur plusieurs lignes, il faut trouver toutes les lignes
si perdu, 3 secondes sont consommées dans le timer
en 45 secondes, faire le meilleur score



PRORITE MAX
n'afficher que arrets multilignes sur zoom initial
se deplacer sur l'arret lorsque clic dans recherche
afficher nom des arrets a partir dun certain zoom
justify text dans 2nd ecran pour Android < 8.0
pourquoi est ce que les M ne s'affichent pas toujours (place d'Italie)
