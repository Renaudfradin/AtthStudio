import React from 'react';
import Image from 'next/image';
import './documentGallery.css';

export type DocumentType = {
  image: string;
};

interface DocumentGalleryProps {
  documents: DocumentType[];
  columns?: 2 | 3;
}

export default async function DocumentGallery({
  documents,
  columns = 2,
}: DocumentGalleryProps) {
  const rows = [];
  let i = 0;
  while (i < documents.length) {
    const rowItems = [];

    for (let col = 0; col < columns; col++) {
      if (documents[i + col]) {
        rowItems.push(
          <div className="gallery-item-small" key={`item-${i + col}`}>
            <Image
              src={documents[i + col].image}
              alt="document"
              width={500}
              height={500}
            />
          </div>,
        );
      }
    }

    rows.push(
      <div className="gallery-row" key={`row-${i}`}>
        {rowItems}
      </div>,
    );
    i += columns;
  }
  return (
    <section className="gallery-scroll-container">
      <div className="gallery-list">{rows}</div>
    </section>
  );
}
