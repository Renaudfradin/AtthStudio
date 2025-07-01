import React from 'react';
import './documentGallery.css';

export type DocumentType = {
  image: string;
};

interface DocumentGalleryProps {
  documents: DocumentType[];
}

export default async function DocumentGallery({
  documents,
}: DocumentGalleryProps) {
  const rows = [];
  let i = 0;
  while (i < documents.length) {
    rows.push(
      <div className="gallery-row" key={`row-${i}`}>
        <div className="gallery-item-small">
          {documents[i] && <img src={documents[i].image} alt="document" />}
        </div>
        <div className="gallery-item-small">
          {documents[i + 1] && (
            <img src={documents[i + 1].image} alt="document" />
          )}
        </div>
      </div>,
    );
    i += 2;
  }
  return (
    <section className="gallery-scroll-container">
      <div className="gallery-list">{rows}</div>
    </section>
  );
}
