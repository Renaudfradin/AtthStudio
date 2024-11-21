import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import logo1 from '@/app/assets/img/project/marcovasco/logo1.png';
import logo2 from '@/app/assets/img/project/marcovasco/logo2.png';
import template from '@/app/assets/img/project/marcovasco/template.svg';
import template2 from '@/app/assets/img/project/marcovasco/template2.svg';
import './marcovasco.css';
import '../project.css';
import Top from '@/app/components/top/top';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Marcovasco',
  description: 'Portfolio Annie Tran ATTH Studio Marcovasco',
};

export default function kumiio() {
  return (
    <div className="mainMarcovasco">
      <Top />
      <div className="hero1">
        <h2 className={`${monumentExtendedd.className}`}>Marcovasco</h2>
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
              <div>
                <p>Brand design</p>
                <p>UX design</p>
                <p>UI design</p>
              </div>
            </div>
            <p className="introduction_p">
              Chez Marco Vasco, ils redéfinissent l'art du voyage sur mesure et
              des séjours haut de gamme. En effet, ils offrent des itinéraires
              personnalisés et un service client dévoué, permettant à les
              voyageurs de découvrir des horizons extraordinaires et de vivre
              des aventures inoubliables. Chaque expérience chez Marco Vasco est
              minutieusement conçue pour répondre aux attentes les plus
              exigeantes, garantissant ainsi des moments exceptionnels à chaque
              étape du voyage. En tant que product designer dans une squad de 3
              designers et un lead designer système, notre mission est de
              capturer l'essence de Marco Vasco à travers une refonte du site,
              offrant une plateforme qui reflète l’engagement envers
              l'excellence et l'unicité de chaque aventure.
            </p>
          </div>
          <div className="techs">
            <h3 className={`${monumentExtendedd.className}`}>Techs</h3>
            <p>FIGMA</p>
            <p>ADOBE PHOTOSHOP</p>
            <p>ADOBE ILLUSTRATOR</p>
          </div>
        </div>
        <div className="wrap_img_marcovasco">
          <Image
            src={logo1}
            className="img_marcovasco"
            alt="Image logo Marcovasco"
          ></Image>
          <Image
            src={logo2}
            className="img_marcovasco"
            alt="Image logo Marcovasco"
          ></Image>
        </div>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>Mission</h3>
            <p>
              Ma mission a été de repenser l'approche UX/UI du site de Marco
              Vasco pour offrir une expérience utilisateur unique et mémorable,
              distincte des autres sites concurrent, en tenant compte des
              besoins spécifiques de nos utilisateurs cibles et en assurant une
              cohérence globale avec la marque.
            </p>
          </div>
          <div>
            <h3 className={`${monumentExtendedd.className}`}>
              Mon intervention
            </h3>
            <p>
              L'objectif était de créer une expérience utilisateur unique et
              mémorable, en analysant les attentes des utilisateurs, les
              tendances du marché et les objectifs commerciaux. J'ai développé
              une approche créative et innovante pour l'UX/UI de l'espace
              client. Cet espace, permet de garantir une fluidité et une gestion
              optimale des voyages.
            </p>
          </div>
        </div>
        <Image
          src={template}
          className="img_marcovasco"
          alt="Image template 1 marcovasco"
        ></Image>
        <Image
          src={template2}
          className="img_marcovasco"
          alt="Image template 2 marcovasco"
        ></Image>
      </div>
      <div className="main_bottom">
        <div>
          <Link className={`${monumentExtendedd.className}`} href="/supermood">
            SUPERMOOD
          </Link>
          <p>Projet précédent</p>
        </div>
      </div>
    </div>
  );
}
