import { Metadata } from 'next';
import React from 'react';
import localFont from 'next/font/local';
import '../project.css';
import './xeahnort.css';
import Image from 'next/image';
import template1 from '@/app/assets/img/project/xeahnort/template1.png';

const monumentExtendedd = localFont({
  src: './MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Xeahnort',
  description: 'Portfolio Annie Tran ATTH Studio Xeahnort',
};

export default function xeahnort() {
  return (
    <div className="main">
      <div className="hero">
        <h2 className={`${monumentExtendedd.className}`}>Xeahnort</h2>
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
              Un homme marchant dehors tard le soir est soudainement attiré par une lumière provenant d’un appartement. Une fois arrivé dans un couloir sombre menant à sa porte d’entrée, il se retrouve avec un groupe d’hommes avec qui il va sympathiser. S’en suis une virée nocturne dans Paris dans lequel il se plongea dans ses sentiments de conquérant...
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
        <Image src={template1} className="" alt="Image template xeahnort"></Image>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Mission</h3>
            <p>
              La mission de Yūka, en tant que brand design, est de créer une marque qui non seulement vend du matcha, mais qui raconte une histoire, éveille les sens et promeut un mode de vie sain. En intégrant des éléments traditionnels dans un cadre moderne, Yūka offre une expérience unique et mémorable à ses clients, les invitant à découvrir et à apprécier l'essence du matcha dans toute sa splendeur
            </p>
          </div>
          <div>
            <h3 className={`${monumentExtendedd.className}`}>
              Mon intervention
            </h3>
            <p>
              Réalisation de toute la production, j’ai dirigé la mise en place de la vidéo + un montage sur le making-off. 
            </p>
          </div>
        </div>
        <Image src={template1} className="" alt="Image template kumiio"></Image>
        <Image src={template1} className="" alt="Image template kumiio"></Image>
      </div>
    </div>
  );
}
