import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from './data';
import { itemsMobile } from './dataMobile';
import './listProject.css';

export default function listProject() {
  return (
    <>
      <div className='listProject'>
        {items.map(({ id, title, img, slug }) => (
            <div className={`project${id}`} key={id}>
              <Link
                href={`/project/${slug}`}
              >
                  <p className={`titleProject${id}`}>{title}</p>
                  <Image
                    className={`projectimg${id}`}
                    src={img}
                    width={320}
                    height={200}
                    alt={`project ${slug}`}
                ></Image>
              </Link>
          </div>
        ))}
      </div>
      <div className='listProjectMobile'>
        {itemsMobile.map(({ id, titleid, title, img, slug }) => (
            <div className={`project${id}`} key={id}>
              <Link
                href={`/project/${slug}`}
              >
                <p className='titleProject'>{titleid}<br />{title}</p>
                <Image
                    src={img}
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
