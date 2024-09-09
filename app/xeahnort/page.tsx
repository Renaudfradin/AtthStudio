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
import template7 from '@/app/assets/img/project/xeahnort/test.svg';
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
      <Top />
      <div className="hero1">
        <h2 className={`${monumentExtendedd.className}`}>Xeahnort</h2>
        <span className="border" />
        <p className={`${monumentExtendedd.className}`}>
          Scroll to see the project
        </p>
      </div>
      <div className="content">
        <div className="block_intro">
          <div className="introduction">
            <div className="introduction_content">
              <h3 className={`${monumentExtendedd.className}`}>Introduction</h3>
              <p>Brand design</p>
              <p>UX design</p>
              <p>UI design</p>
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
            <p>FIGMA</p>
            <p>PHOTOSHOP</p>
            <p>Notion</p>
            <p>Catcup</p>
            <p>PREMIERE PRO</p>
          </div>
        </div>
        {/* img floux */}
        <Image
          src={template1}
          className="img_xeahnort"
          alt="Image template xeahnort"
        ></Image>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Mission</h3>
            <p>
              La mission de Yūka, en tant que brand design, est de créer une
              marque qui non seulement vend du matcha, mais qui raconte une
              histoire, éveille les sens et promeut un mode de vie sain. En
              intégrant des éléments traditionnels dans un cadre moderne, Yūka
              offre une expérience unique et mémorable à ses clients, les
              invitant à découvrir et à apprécier l'essence du matcha dans toute
              sa splendeur
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
        </div>
        <div className="block_other">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Making-off</h3>
          </div>
        </div>
        <div className="block_end">
          <div>
            {/* img floux */}
            <Image
              src={template7}
              className="img_xeahnort"
              alt="Image template xeahnort"
            ></Image>
            <div>
              <p>CHEIK KONE</p>
              <p>SAMUEL JO</p>
              <p>JACKY TRUONG</p>
              <p>JORDAN TOKO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main_bottom">
        <Link className={`${monumentExtendedd.className}`} href="/salamender">
          PROJET PRÉCEDENT
        </Link>
        <Link className={`${monumentExtendedd.className}`} href="/supermood">
          PROJET SUIVANT
        </Link>
      </div>
    </div>
  );
}
