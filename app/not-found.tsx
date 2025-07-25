import React from 'react';
import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page non trouvée</h1>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/article" className="btn-secondary">
            Voir mon blog
          </Link>
        </div>
      </div>
    </div>
  );
}
