import React from 'react';
import Link from 'next/link';
import './legal.css';

export default function Legal() {
  return (
    <main className="legal-container">
      <h1 className="legal-title">Mentions légales</h1>

      <section className="legal-section">
        <h2 className="legal-section-title">1. Éditeur du site</h2>
        <p>Directeur de publication : Annie Tran</p>
        <p>Email : annietth.pro@gmail.com</p>
        <p>
          Site internet :
          <Link href="https://atth-studio.vercel.app" className="legal-link">
            https://atth-studio.vercel.app
          </Link>
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">2. Hébergement</h2>
        <p>Hébergeur : Vercel Inc.</p>
        <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        <p>
          Site web :
          <Link href="https://vercel.com" className="legal-link">
            https://vercel.com
          </Link>
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">3. Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus (textes, images, graphismes, logo, icônes,
          etc.) présents sur ce site sont la propriété exclusive de Annie Tran,
          sauf mention contraire.
        </p>
        <p>
          Toute reproduction, distribution, modification, adaptation ou
          publication, même partielle, est strictement interdite sans
          l’autorisation écrite préalable de l’auteur.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">4. Responsabilité</h2>
        <p>
          Les informations présentes sur ce site sont fournies à titre
          indicatif. Annie Tran ne saurait être tenu responsable des erreurs,
          omissions ou d’un usage inapproprié des contenus publiés.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">5. Données personnelles</h2>
        <p>
          Ce site ne collecte pas de données personnelles à l’insu des
          utilisateurs. Si un formulaire de contact est présent, les données
          collectées ne sont utilisées que dans le cadre de la relation
          professionnelle et ne sont ni cédées ni vendues à des tiers.
        </p>
        <p>
          Conformément à la loi « Informatique et Libertés » et au RGPD, vous
          disposez d’un droit d’accès, de rectification ou de suppression de vos
          données. Pour exercer ce droit, contactez : annietth.pro@gmail.com.
        </p>
      </section>

      <section>
        <h2 className="legal-section-title">6. Cookies</h2>
        <p>
          Le site peut utiliser des cookies à des fins statistiques ou de
          fonctionnement. Vous pouvez configurer votre navigateur pour les
          refuser.
        </p>
      </section>
    </main>
  );
}
