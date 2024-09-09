import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import logo from '@/app/assets/img/project/kumiio/logo_kumiio.png';
import kumiios from '@/app/assets/img/project/kumiio/kumiio.png';
import BlockColor from '@/app/components/blockColor/blockColor';
import Top from '@/app/components/top/top';
import './kumiio.css';
import '../project.css';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Kūmiio',
  description: 'Portfolio Annie Tran ATTH Studio Kūmiio',
};

export default function kumiio() {
  return (
    <div className="main">
      <Top />
      <div className="hero1">
        <h2 className={`${monumentExtendedd.className}`}>Kūmiio</h2>
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
              Yūka est une marque de Matcha, ils travaillent en étroite
              collaboration avec des fermes locales au Japon qui cultivent leur
              thé selon des pratiques agricoles durables et respectueuses de
              l'environnement. Ils prônent que la culture du thé doit être
              guidée par la passion et le respect de la nature pour préserver la
              richesse de l'agriculture japonaise et offrir des produits de
              qualité supérieure.
            </p>
          </div>
          <div className="techs">
            <h3 className={`${monumentExtendedd.className}`}>Techs</h3>
            <p>FIGMA</p>
            <p>ADOBE PHOTOSHOP</p>
          </div>
        </div>
        <div className="wrapImg">
          <Image src={logo} className="" alt="Image logo kumiio"></Image>
          <Image src={logo} className="" alt="Image logo kumiio"></Image>
          <Image src={logo} className="" alt="Image logo kumiio"></Image>
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
        <Image src={kumiios} className="" alt="Image template kumiio"></Image>
        <div className="block_color">
          <div className="wrap_color">
            <h3 className={`${monumentExtendedd.className}`}>Couleur</h3>
            <div className="wrap_color_content">
              <BlockColor
                title="PIERRE LUNE"
                color="#FFFFFF"
                colorText="#1C1C1C"
              />
              <BlockColor
                title="EMERAUDE"
                color="#1E4423"
                colorText="#FFFFFF"
              />
              <BlockColor title="OPALE" color="#FEFBE9" colorText="#1C1C1C" />
              <BlockColor
                title="QUARTZ ROSE"
                color="#F19BAB"
                colorText="#FFFFFF"
              />
              <BlockColor title="BÉRIL" color="#F2F593" colorText="#1C1C1C" />
              <BlockColor title="JADE" color="#8CAF5A" colorText="#FFFFFF" />
            </div>
          </div>
          <div className="signification">
            <h3 className={`${monumentExtendedd.className}`}>Signification</h3>
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
        <Image src={kumiios} className="" alt="Image template kumiio"></Image>
      </div>
      <div className="main_bottom">
        <Link className={`${monumentExtendedd.className}`} href="/salamender">
          PROJET SUIVANT
        </Link>
      </div>
    </div>
  );
}
