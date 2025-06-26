import React from 'react';
import './documentGallery.css';

export type DocumentType = {
  image: string;
};

interface DocumentGalleryProps {
  documents: DocumentType[];
}

const DocumentGallery: React.FC<DocumentGalleryProps> = ({ documents }) => {
  return (
    <section>
      <div>
        {documents.map((doc, idx) => (
          <div key={idx}>
            <img src={doc.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentGallery;
