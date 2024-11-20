import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import template1 from '@/app/assets/img/project/xeahnort/template2.svg';
import template3 from '@/app/assets/img/project/xeahnort/template3.svg';
import template4 from '@/app/assets/img/project/xeahnort/template4.svg';
import template5 from '@/app/assets/img/project/xeahnort/template5.svg';
import template6 from '@/app/assets/img/project/xeahnort/VINYLE.svg';
import random1 from '@/app/assets/img/project/xeahnort/random1.png';
import random2 from '@/app/assets/img/project/xeahnort/test.png';
import random3 from '@/app/assets/img/project/xeahnort/test2.png';
import Top from '@/app/components/top/top';
import './xeahnort.css';
import '../project.css';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Xeahnort',
  description: 'Portfolio Annie Tran ATTH Studio Xeahnort',
};

export default function xeahnort() {
  return (
    <div className="mainXeahnort">
      <div className="mainXeahnortTop">
        <Top />
        <div className="hero1">
          <h2 className={`${monumentExtendedd.className}`}>Xeahnort</h2>
          <span className="border" />
          <p className={`${monumentExtendedd.className}`}>
            Scroll to see the project
          </p>
        </div>
      </div>
      <div className="content">
        <div className="block_intro">
          <div className="introduction">
            <div className="introduction_content">
              <h3 className={`${monumentExtendedd.className}`}>Introduction</h3>
              <div>
                <p>Brand design</p>
                <p>UX design</p>
                <p>UI design</p>
              </div>
            </div>
            <p className="introduction_p">
              Un homme marchant dehors tard le soir est soudainement attiré par
              une lumière provenant d’un appartement. Une fois arrivé dans un
              couloir sombre menant à sa porte d’entrée, il se retrouve avec un
              groupe d’hommes avec qui il va sympathiser. S’en suis une virée
              nocturne dans Paris dans lequel il se plongea dans ses sentiments
              de conquérant...
            </p>
          </div>
          <div className="techs">
            <h3 className={`${monumentExtendedd.className}`}>Techs</h3>
            <div>
              <p>FIGMA</p>
              <p>Catcup</p>
              <p>PHOTOSHOP</p>
              <p>PREMIERE PRO</p>
              <p>Notion</p>
            </div>
          </div>
        </div>
        <Image
          src={template1}
          className="img_xeahnort"
          alt="Image template xeahnort"
        ></Image>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Mission</h3>
            <p>
              La mission était de promouvoir un artiste français qui à travers
              son texte témoigne d’un sentiments de reconnaissance pour
              challenger tout au long de sa vie. Dans chaque moment de notre
              vie, nous faisons obstacles a des doutes et des peurs. Ce texte
              renvoie une image à surmonter les épreuves et prouver sa valeur
              envers soi-même
            </p>
          </div>
          <div>
            <h3 className={`${monumentExtendedd.className}`}>
              Mon intervention
            </h3>
            <p>
              Réalisation de toute la production, j’ai dirigé la mise en place
              de la vidéo + un montage sur le making-off.
            </p>
          </div>
        </div>
        <div className="block_other">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Moodboard</h3>
            <Image
              src={template3}
              className="img_xeahnort"
              alt="Image template xeahnort"
              priority
            ></Image>
          </div>
        </div>
        <div className="block_other">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Storyboard</h3>
            <Image
              src={template4}
              className="img_xeahnort"
              alt="Image template xeahnort"
              priority
            ></Image>
          </div>
        </div>
        <div className="block_random">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Random photo</h3>
            <div>
              <Image
                src={random1}
                className="img_xeahnort_ramdom"
                alt="Image template xeahnort"
              ></Image>
              <Image
                src={random2}
                className="img_xeahnort_ramdom"
                alt="Image template xeahnort"
              ></Image>
              <Image
                src={random3}
                className="img_xeahnort_ramdom"
                alt="Image template xeahnort"
              ></Image>
            </div>
          </div>
        </div>
        <div className="block_other">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Random mersh</h3>
            <div>
              <Image
                src={template5}
                className="img_xeahnort_other"
                alt="Image template xeahnort"
                priority
              ></Image>
              <Image
                src={template6}
                className="img_xeahnort_other"
                alt="Image template xeahnort"
                priority
              ></Image>
            </div>
          </div>
        </div>
        <div className="block_other">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Clip video</h3>
          </div>
          <div className="youtube_video">
            <iframe
              width="980"
              height="450"
              src="https://www.youtube.com/embed/Cjc3b66gq4Q?si=2gelDW10OIgN6naF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="main_bottom">
        <div>
          <Link className={`${monumentExtendedd.className}`} href="/salamender">
            SALAMENDER
          </Link>
          <p>Projet précédent</p>
        </div>
        <div>
          <Link className={`${monumentExtendedd.className}`} href="/supermood">
            SUPERMOOD
          </Link>
          <p>Projet suivant</p>
        </div>
      </div>
    </div>
  );
}
