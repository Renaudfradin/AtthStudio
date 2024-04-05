'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from './data';
import { itemsMobile } from './dataMobile';
import './listProject.css';

export default function ListProject() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (id) =>  setHoveredItem(id);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <>
      <div className='listProject'>
        {items.map(({ id, title, img, imgnoir, slug }) => (
          <div
            className={`project${id}`}
            key={id}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`/project/${slug}`}
            >
              <p className={`titleProject${id}`}>{title}</p>
              <Image
                className={`projectimg${id}`}
                src={hoveredItem === id ? imgnoir : img}
                width={320}
                height={200}
                alt={`project ${slug}`}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className='listProjectMobile'>
        {itemsMobile.map(({ id, titleid, title, img, imgnoir, slug }) => (
          <div
            className={`project${id}`}
            key={id}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
              <Link
                href={`/project/${slug}`}
              >
                <p className='titleProject'>{titleid}<br />{title}</p>
                <Image
                  src={hoveredItem === id ? imgnoir : img}
                  width={336}
                  height={240}
                  alt={`project ${slug}`}
                ></Image>
              </Link>
          </div>
        ))}
      </div>
    </>
  )
}
