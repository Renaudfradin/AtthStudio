import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './loadingPage.css'

export default function loadingPage() {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Lancer l'animation et masquer le composant après 20 secondes
    const timer = setTimeout(() => {
      setAnimationClass('slide-up'); // Ajouter la classe pour l'animation de défilement
      setTimeout(() => setVisible(false), 1000); // Attendre la fin de l'animation pour masquer le composant
    }, 20000);

    return () => clearTimeout(timer); // Nettoyage du timer au démontage du composant
  }, []);

  if (!visible) return null; // Ne pas rendre le composant si `visible` est `false`

  return (
    <div className={`loading-container ${animationClass}`}>
      <h1>Chargement...</h1>
      <p>Veuillez patienter, vous serez redirigé sous peu.</p>
    </div>
  );
  
}
