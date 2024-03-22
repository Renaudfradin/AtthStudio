import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from './data';
import './listProject.css';

export default function listProject() {
  return (
    <div className='listProject'>
      {items.map(({ id, title, img, slug }) => (
          <div className={`project${id}`} key={id}>
            <Link
                href={`/project/${slug}`}>
              <p className='titleProject'>{title}</p>
              <Image
                  src={img}
                  alt={`project ${slug}`}
              ></Image>
            </Link>
        </div>
      ))}
    </div>
  )
}
