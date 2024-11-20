import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import Template from '@/app/assets/img/project/supermood/template.svg';
import Template2 from '@/app/assets/img/project/supermood/template2.svg';
import Template3 from '@/app/assets/img/project/supermood/template3.svg';
import TextArea from '@/app/assets/img/project/supermood/textArea.svg';
import Template4 from '@/app/assets/img/project/supermood/template4.svg';
import Top from '@/app/components/top/top';
import './supermood.css';
import '../project.css';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export const metadata: Metadata = {
  title: 'Supermood',
  description: 'Portfolio Annie Tran ATTH Studio Supermood',
};

export default function supermood() {
  return (
    <div className="mainSupermood">
      <Top />
      <div className="hero1">
        <h2 className={`${monumentExtendedd.className}`}>Supermood</h2>
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
              J’ai travaillé sur Supermood, une plateforme SASS qui permet d’accompagner des entreprises à mieux comprendre et améliorer l'engagement de leurs employés. La plateforme permet aux entreprises de créer des enquêtes sur mesure, de collecter des données qualitatives et quantitatives, et d'analyser ces informations pour prendre des décisions stratégiques éclairées.
            </p>
          </div>
          <div className="techs">
            <h3 className={`${monumentExtendedd.className}`}>Techs</h3>
            <p>FIGMA</p>
            <p>JIRA</p>
            <p>ADOBE ILLUSTRATOR</p>
          </div>
        </div>
        <Image src={Template} className="img_template_supermood" alt="Image template supermood"></Image>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>1er Mission</h3>
            <p>
              En intégrant Supermood, j'ai été affectée à la partie produit pour réaliser un design system, donc une documentation entre développeur et designer pour se coordiner sur les implantations de fonctionnalité, d'abord minimal puis complexe. 
            </p>
          </div>
          <div>
            <h3 className={`${monumentExtendedd.className}`}>
              Mon intervention
            </h3>
            <p>
              Nous nous sommes inspiré des librairie déjà dispo sur Internet comme Material Design, Bootstrap qui propose des fonctionnalités permettant à s'identifier entre dev et designer.
              Mon intervention était donc le design system par une librairie Rokit en designant des Element UI a visuelle attractive puis les poster sur la lbrairie.
            </p>
          </div>
        </div>
        <Image src={Template4} className="img_template_supermood" alt="Image template supermood"></Image>
        <div className="block_small_precision">
          <div className="small_precision">
            <h3 className={`${monumentExtendedd.className}`}>Petite précision</h3>
            <p>J'ai ensuite travaillé sur des composants plus simples comme des inputs, des boutons, des text-areas. Ici c'est le cas, je procèdes par Anatomy, Etats, Prototypage/schéma.</p><br />
            <p>Dans un premier temps, je procède l'anatomy du text area en découpant les points important : content et description.
            Ensuite les états : ver, focus, error, disabled.</p><br />
            <p>Le but de cette mission a été de pouvoir recréer des bases solides pour la continuité de nos prochaines design, notre objectif a été de pouvoir développer par la suite des fonctionnalité plus complexe en reprenant des fonctionnalité plus simple.
            </p>
          </div>
          <Image src={TextArea} className="" alt="Image template supermood"></Image>
        </div>
        <div className="block_mission">
          <div>
            <h3 className={`${monumentExtendedd.className}`}>2e Mission</h3>
            <p>
              L’enjeu a été d’améliorer l’interface utilisateur pour rendre la plateforme plus intuitive, accessible, avec une visuelle attrayante. La problématique a été d’identifier et résoudre les problèmes liés au layout existant tout en respectant les contraintes de la plateforme et les attentes des utilisateurs. 
            </p>
          </div>
          <div>
            <h3 className={`${monumentExtendedd.className}`}>
              Mon intervention
            </h3>
            <p>
              Je devais intégrer les retours des utilisateurs de manière efficace pour garantir que les modifications apportées améliorent réellement l’expérience.Extraire une analyse a été très difficile pour moi de comprendre et de pouvoir améliorer. Mes responsabilités ont été d’analyse le layout actuel, énumerer des propositions de modifications, réaliser de maquettes de redesign.
            </p>
          </div>
        </div>
        <Image src={Template2} className="img_template_supermood" alt="Image template supermood"></Image>
        <Image src={Template3} className="img_template_supermood_1" alt="Image template supermood"></Image>
      </div>
      <div className="main_bottom">
        <div>
          <Link className={`${monumentExtendedd.className}`} href="/xeahnort">
            XEAHNORT
          </Link>
          <p>Projet précédent</p>
        </div>
        <div>
          <Link className={`${monumentExtendedd.className}`} href="/marcovasco">
            MARCOVASCO
          </Link>
          <p>Projet suivant</p>
        </div>
      </div>
    </div>
  );
}
