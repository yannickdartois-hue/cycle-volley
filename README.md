# cycle-volley

## Design commun (17/10/2026)
- `eps-design.css` et `eps-commun.js` : socle visuel partagé par tous les cycles (volley, badminton, demi-fond, tennis de table, step). Le fichier est identique dans chaque dépôt : en cas de modification, recopier la même version partout.
- Couleur de l'activité : ligne `<style>:root{--sport:…}</style>` dans `index.html`.
- **Mode gymnase** : bouton en haut à droite. Actif par défaut quand l'appli est ouverte depuis l'écran d'accueil de l'iPad.
- `index-old.html` : la version d'avant, gardée telle quelle (bandeau jaune « Ancienne version »).

## Organisation des pages (18/10/2026)
- `index.html` : **la version actuelle du cycle**, l'écran de cours. Séances du cycle dans le bandeau (un toucher pour en afficher une), bascule Première / Terminale, déroulé ajustable, variables, schémas.
- `cycle-volley-old.html` : l'outil précédent, gardé par sécurité. C'est aussi là que restent la classe, le tournoi, l'observation, l'évaluation, la banque et les PDF (bouton « Préparer »).
- `index-old.html` : la toute première version.
- `terrain.html` : ancienne adresse de test, renvoie vers `index.html`.
- `volley-donnees.js` : séances, schémas et échauffements, partagés par toutes les pages.
- `polices/` : polices embarquées pour le hors ligne (licence SIL OFL).
