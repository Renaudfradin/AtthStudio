import { Metadata } from 'next';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import logo1 from '@/app/assets/img/project/salamander/logo1.svg';
import logo2 from '@/app/assets/img/project/salamander/logo2.svg';
import logo3 from '@/app/assets/img/project/salamander/logo3.svg';
import template1 from '@/app/assets/img/project/salamander/template1.svg';
import template2 from '@/app/assets/img/project/salamander/template2.svg';
import template3 from '@/app/assets/img/project/salamander/template3.svg';
import salamanderM from '@/app/assets/img/project/salamander/salamander_maillot.png';
import BlockColor from '@/app/components/blockColor/blockColor';
import '../project.css';
import './salamender.css';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Salamender',
  description: 'Portfolio Annie Tran ATTH Studio Salamender',
};

export default function salamender() {
  return (
    <div className="main">
      <div className="hero">
        <h2 className={`${monumentExtendedd.className}`}>Salamender</h2>
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
              Au début de 2020, deux amis fraîchement diplômés, fusionnent leur
              passion pour l'e-sport et leurs compétences stratégiques acquises
              sur des champs de bataille virtuels comme League of Legends et
              divers RPGs, pour fonder Salamander. Conçu comme un hub pour les
              aficionados de gaming, Salamander se positionne rapidement comme
              un acteur prometteur dans le monde compétitif de l'e-sport.
            </p>
          </div>
          <div className="techs">
            <h3 className={`${monumentExtendedd.className}`}>Techs</h3>
            <p>FIGMA</p>
            <p>ADOBE PHOTOSHOP</p>
            <p>ADOBE ILLUSTRATOR</p>
          </div>
        </div>
        <div className="wrapImg">
          <Image src={logo1} className="" alt="Image logo 1 kumiio"></Image>
          <Image src={logo2} className="" alt="Image logo 2 kumiio"></Image>
          <Image src={logo3} className="" alt="Image logo 3 kumiio"></Image>
        </div>
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
              Je devais façonner et maintenir une identité de marque forte et
              cohérente pour Yūka. Je souhaitais mettre l'accent sur la
              tradition et la modernité, et en créant des expériences
              sensorielles mémorables, pour aider Yūka à se démarquer et à
              fidéliser une clientèle passionnée par le matcha et la culture
              japonaise
            </p>
          </div>
        </div>
        <Image
          src={template3}
          className="img_salamander"
          alt="Image template kumiio"
          priority
        ></Image>
        <div className="block_color">
          <div className="wrap_color">
            <h3 className={`${monumentExtendedd.className}`}>Couleur</h3>
            <div className="wrap_color_content">
              <BlockColor
                title="PIERRE LUNE"
                color="#FFFFFF"
                colorText="#1C1C1C"
              />
              <BlockColor title="Onyx" color="#100D11" colorText="#FFFFFF" />
              <BlockColor title="Ruby" color="#FF002E" colorText="#FFFFFF" />
            </div>
          </div>
          <div className="signification">
            <h3 className={`${monumentExtendedd.className}`}>Signification</h3>
            <p>
              Nos couleurs de marque sont éclatantes et lumineuses, apportant un
              contraste marqué à notre identité. Nous avons sélectionné le
              ROUGE, symbolisant la passion et l'énergie ardente de nos équipes
              d'e-sport, ainsi que le NOIR, représentant l'élégance
              intemporelle. Ainsi, notre équipe e-sport incarne une passion
              dévorante qui traversera les époques.
            </p>
          </div>
        </div>
        <Image
          src={template1}
          className="img_salamander"
          alt="Image template 1 kumiio"
        ></Image>
        <Image
          src={template2}
          className="img_salamander"
          alt="Image template 2 kumiio"
        ></Image>
        <Image
          src={salamanderM}
          className="img_salamander"
          alt="Image maillot kumiio"
        ></Image>
      </div>
    </div>
  );
}
