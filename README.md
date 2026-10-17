# cycle-volley

## Design commun (17/10/2026)
- `eps-design.css` et `eps-commun.js` : socle visuel partagé par tous les cycles (volley, badminton, demi-fond, tennis de table, step). Le fichier est identique dans chaque dépôt : en cas de modification, recopier la même version partout.
- Couleur de l'activité : ligne `<style>:root{--sport:…}</style>` dans `index.html`.
- **Mode gymnase** : bouton en haut à droite. Actif par défaut quand l'appli est ouverte depuis l'écran d'accueil de l'iPad.
- `index-old.html` : la version d'avant, gardée telle quelle (bandeau jaune « Ancienne version »).

## Écran terrain (version test, 17/10/2026)
- `terrain.html` : l'écran à utiliser pendant le cours. Bloc en cours, minuteur discret, variables plus facile / plus difficile, « Ajuster le déroulé » (rallonger, raccourcir, zapper, remplacer, changer l'ordre), « Mes séances ». Les ajustements ne valent que pour la séance du jour.
- `index.html` : l'outil complet, inchangé (bouton « Préparer » depuis l'écran terrain). `index-old.html` : la version d'origine.
- `volley-donnees.js` : séances, schémas et échauffements, partagés par les deux pages. Modifier une séance ici la modifie partout.
- `polices/` : polices embarquées pour le hors ligne (licence SIL OFL, voir `polices/LICENCES.txt`).
- Durées : les fiches suivent le déroulé de la séance (75 min de pratique).
