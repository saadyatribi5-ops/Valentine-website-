const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  
  if (envelope.classList.contains('open')) {
    // Crée 15 cœurs flottants quand l'enveloppe s'ouvre
    for (let i = 0; i < 15; i++) {
      createHeart();
    }
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Choisit un emoji cœur aléatoire
  const hearts = ['❤️', '💖', '💕', '💗', '💓', '🫶'];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  
  // Position aléatoire sur la largeur de l'écran
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Durée d'animation aléatoire entre 7 et 15 secondes
  heart.style.animationDuration = (7 + Math.random() * 8) + 's';
  
  // Taille aléatoire entre 1.4rem et 3.9rem
  heart.style.fontSize = (1.4 + Math.random() * 2.5) + 'rem';
  
  // Délai d'apparition aléatoire (0 à 1.5s)
  heart.style.animationDelay = Math.random() * 1.5 + 's';
  
  // Ajoute le cœur au body
  document.body.appendChild(heart);
  
  // Supprime le cœur après 16 secondes pour ne pas alourdir la page
  setTimeout(() => heart.remove(), 16000);
}

// Optionnel : ouvre automatiquement l'enveloppe après 1.5 secondes (pour tester)
// Décommente la ligne ci-dessous si tu veux que ça s'ouvre tout seul au chargement
// setTimeout(() => envelope.click(), 1500);
