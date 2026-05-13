// Particules flottantes
  const couleurs = ['#a78bfa','#38bdf8','#f472b6','#34d399'];
  for(let i = 0; i < 18; i++){
    const particule = document.createElement('div');
    particule.className = 'particule';
    const taille = Math.random() * 6 + 3;
    particule.style.cssText = `width:${taille}px;height:${taille}px;left:${Math.random()*100}vw;background:${couleurs[i%4]};animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*10}s`;
    document.body.appendChild(particule);
  }

  // Effet de frappe unique
  const message = "Je crée des apps web modernes, j'apprends chaque jour et je transforme des idées en code.";
  let position = 0;
  const zoneEcriture = document.getElementById('machine-a-ecrire');
  function ecrire(){
    if(position <= message.length){
      zoneEcriture.textContent = message.slice(0, position++);
      setTimeout(ecrire, 40);
    }
  }
  setTimeout(ecrire, 1200);

  // Apparition des sections au scroll + animation des barres
  const observateur = new IntersectionObserver(entrees => {
    entrees.forEach(entree => {
      if(entree.isIntersecting){
        entree.target.classList.add('visible');
        entree.target.querySelectorAll('.barre-remplissage').forEach(barre => {
          barre.style.width = barre.dataset.largeur + '%';
        });
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.a-reveler').forEach(el => observateur.observe(el));