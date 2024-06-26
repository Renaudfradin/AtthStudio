import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import Top from '@/app/components/top/top';
import mockup from '@/app/assets/img/project/supermood/mockup.svg';
import email1 from '@/app/assets/img/project/supermood/EmailBody1.svg';
import email2 from '@/app/assets/img/project/supermood/EmailBody2.svg';
import email3 from '@/app/assets/img/project/supermood/EmailBody3.svg';
import fonction1 from '@/app/assets/img/project/supermood/fonction1.svg';
import fonction2 from '@/app/assets/img/project/supermood/fonction2.svg';
import fonction3 from '@/app/assets/img/project/supermood/fonction3.svg';
import fonction4 from '@/app/assets/img/project/supermood/fonction4.svg';
import fonction5 from '@/app/assets/img/project/supermood/fonction5.svg';
import fonction6 from '@/app/assets/img/project/supermood/fonction6.svg';
import meet1 from '@/app/assets/img/project/supermood/meet-background1.svg';
import meet2 from '@/app/assets/img/project/supermood/meet-background2.svg';
import meet3 from '@/app/assets/img/project/supermood/meet-background3.svg';
import mission from '@/app/assets/img/project/supermood/mission/campaign-menu.svg';
import mission1 from '@/app/assets/img/project/supermood/mission/checkbox.svg';
import mission2 from '@/app/assets/img/project/supermood/mission/floating-menu.svg';
import mission3 from '@/app/assets/img/project/supermood/mission/frame.svg';
import mission4 from '@/app/assets/img/project/supermood/mission/select.svg';
import mission5 from '@/app/assets/img/project/supermood/mission/spacing-example.svg';
import mission6 from '@/app/assets/img/project/supermood/mission/switch.svg';
import mission7 from '@/app/assets/img/project/supermood/mission/tip.svg';
import mission8 from '@/app/assets/img/project/supermood/mission/tooltip.svg';
import mission9 from '@/app/assets/img/project/supermood/mission/user-menu.svg';
import graph1 from '@/app/assets/img/project/supermood/graph1.svg';
import graph2 from '@/app/assets/img/project/supermood/graph2.svg';
import graph3 from '@/app/assets/img/project/supermood/graph3.svg';
import template from '@/app/assets/img/project/supermood/template.svg';
import layout from '@/app/assets/img/project/supermood/layout.svg';
import layout2 from '@/app/assets/img/project/supermood/layout2.svg';
import inputSearch from '@/app/assets/img/project/supermood/input/search.svg';
import inputDate from '@/app/assets/img/project/supermood/input/data-picker.svg';
import inputMail from '@/app/assets/img/project/supermood/input/mail.svg';
import inputPassword from '@/app/assets/img/project/supermood/input/password.svg';
import input from '@/app/assets/img/project/supermood/input/input.svg';
import inputLarge from '@/app/assets/img/project/supermood/input/inputlarge.svg';
import inputRow1 from '@/app/assets/img/project/supermood/input/row.svg';
import inputRow2 from '@/app/assets/img/project/supermood/input/row-1.svg';
import inputRow3 from '@/app/assets/img/project/supermood/input/row2.svg';
import inputFinal from '@/app/assets/img/project/supermood/input/inputGrand.svg';
import '../project.css';
import './supermood.css';

const criteria = localFont({
  src: './Fontspring-DEMO-criteriacf-bold.otf',
});

export const metadata = {
  title: 'Supermood',
  description: 'Portfolio Annie Tran ATTH Studio Supermood',
};

export default function Project() {
  return (
    <div className="mainSupermmod">
      <Top />
      <div className="sectionSupermmod">
        <div className="sectionSaas">
          <div className="sectionSaas1">
            <div>
              <p className={`${criteria.className} titleStart`}>
                Starting Overview
              </p>
              <h4 className={`${criteria.className} titleSupermood1`}>
                PLATFORM SASS
              </h4>
              <p className="titleQuote">“</p>
              <p className={`${criteria.className} titleDescription`}>
                Supermood, la solution de feedback instantané simple et
                efficace, partagée dans toute l’entreprise
              </p>
            </div>
            <Image src={mockup} alt="imgMockup" />
          </div>
        </div>
        <div className="sectionValues">
          <h4 className={`${criteria.className} titleSupermood2`}>VALUES</h4>
          <div className="blocks">
            <p className={`${criteria.className} block1`}>
              On se bat <br />
              pour gagner du temps
            </p>
            <p className={`${criteria.className} block2`}>
              On se bat <br />
              pour la transparence
            </p>
            <p className={`${criteria.className} block3`}>
              On se bat <br />
              pour l’empowerment
            </p>
            <p className={`${criteria.className} block4`}>
              On se bat <br />
              pour la transformation
            </p>
            <p className={`${criteria.className} block5`}>
              On se bat <br />
              contre le court termisme
            </p>
            <p className={`${criteria.className} block6`}>
              On se bat <br />
              pour valoriser la fonction RH
            </p>
          </div>
        </div>
        <div className="sectionMission">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                En tant que product designer, j’utilise la méthodologie de
                l’Atomic Design pour structurer et créer des systèmes
                d’interface utilisateur efficaces et cohérents. J’ai travaillé
                en collaboration avec les développeurs afin de créer un design
                system pertinent et intuitif pour avoir une cohésion entre-nous.
                J’ai designé de A à Z, soit de l’atome au prototypage.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              DESIGN SYSTEM
            </h4>
          </div>
          <div className="wrapImgMission">
            <Image src={mission5} alt="imggraph1" />
            <Image src={mission6} alt="imggraph1" />
            <Image src={mission3} alt="imggraph1" />
            <Image src={mission9} alt="imggraph1" />
            <div className="blockMission">
              <Image src={mission7} alt="imggraph1" />
              <Image src={mission2} alt="imggraph1" />
            </div>
            <Image src={mission8} alt="imggraph1" />
            <div className="blockMission">
              <Image src={mission1} alt="imggraph1" />
              <Image src={mission4} alt="imggraph1" />
            </div>
            <Image src={mission} alt="imggraph1" />
          </div>
        </div>
        <div className="sectionMission1">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Nous nous sommes inspirés de Material UI pour créer notre propre
                documentation sur Rokit. Pour cela, nous avons réalisé
                l’anatomie des composants de type (button, input, select,
                checkbox, tooltips, tips) en énumérant leurs variations et en
                prototypant les moments où l’élément se déclenche. Participation
                active et réalisation de nombreux composants.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              DESIGN SYSTEM ROKIT
            </h4>
          </div>
          <div className="wrapImgMain">
            <div className="wrapImgInput">
              <p>Variants</p>
              <Image src={input} alt="imggraph1" />
              <Image src={inputDate} alt="imggraph1" />
              <Image src={inputSearch} alt="imggraph1" />
              <Image src={inputPassword} alt="imggraph1" />
              <Image src={inputMail} alt="imggraph1" />
            </div>
            <div className="wrapImgInputLarge">
              <div>
                <p>Anatomy</p>
                <Image src={inputLarge} alt="imggraph1" />
              </div>
              <div>
                <p>Contents</p>
                <Image src={inputRow1} alt="imggraph1" />
                <Image src={inputRow2} alt="imggraph1" />
                <Image src={inputRow3} alt="imggraph1" />
              </div>
            </div>
            <div className="wrapImgVideo">
              <p>Exemple / video</p>
              <Image src={inputFinal} alt="imggraph1" />
            </div>
          </div>
        </div>
        <div className="sectionMission2">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Notre objectif est d’améliorer constamment la plateforme en
                augmentant ses fonctionnalités et en rendant le travail plus
                accessible. Après des sessions de brainstorming avec les PM, PO
                et les product designers, nous nous occupons de toutes les
                réalisations pour fluidifier le travail. J’ai pris en charge la
                déclinaison de certaines fonctionnalités de la plateforme SaaS
                pour que chaque développeur puisse les implémenter. Je m’assure
                de suivre les principes de conception, tels que la règle des 8,
                la loi de proximité et l’utilisation de design tokens. Mon but
                est de rendre le prototypage fluide et compréhensible pour les
                développeurs.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Déclinaison des fonctionnalités
            </h4>
          </div>
          <div className="wrapImg2">
            <Image src={fonction1} alt="imggraph1" />
            <Image src={fonction2} alt="imggraph1" />
            <Image src={fonction3} alt="imggraph1" />
            <Image src={fonction4} alt="imggraph1" />
            <Image src={fonction5} alt="imggraph1" />
            <Image src={fonction6} alt="imggraph1" />
          </div>
        </div>
        <div className="sectionMission3">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Après release de mon travail par mon Lead Product Designer, je
                mets en place un prototypage dans une section de figma avec une
                partie Français et Anglais pour rendre le travail bien plus
                fonctionnel. Si jamais il y a des élements à mettre en place, je
                commente !
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Déclinaison des fonctionnalités
            </h4>
          </div>
          <Image src={layout2} alt="imggraph1" />
        </div>
        <div className="sectionMission4">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Ma mission principale en entrant dans l’entreprise était de
                challenger la nouvelle plateforme SaaS pour la rendre plus
                compréhensible, fonctionnelle et surtout pour comprendre les
                résultats. Dans un premier temps, je réalise un screenshot de
                toute la plateforme. Je fais un audit concurrentiel de Bastien &
                Scapin. Ensuite, j’établis une réunion avec les CX, PM et PO,
                ceux qui ont travaillé plusieurs fois sur la plateforme, pour
                que nous soulignions tous les problèmes ou accroches que les
                utilisateurs ont avec la plateforme. Ensuite, je réalise une
                matrice de valeurs pour émettre plusieurs hypothèses possibles.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Challenger le layout
            </h4>
          </div>
          <Image src={layout} alt="imggraph1" />
        </div>
        <div className="sectionMission5">
          <div className="titleBlock2">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Je me challenge sur le côté graphique pour rendre le travail un
                peu plus compréhensible. Je réalise également beaucoup de
                lectures. À chaque finalité de mon travail, je réalise un test
                A/B pour visualiser ce que les utilisateurs comprennent et ce
                qu’ils ne comprennent pas. Bien entendu, avant de réaliser, je
                demande une confirmation à mon lead designer. Malheureusement,
                je ne peux pas vous montrer le travail final, car il n’est pas
                encore disponible sur la plateforme.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Challenger le layout
            </h4>
          </div>
          <div className="wrapImg5">
            <Image src={graph1} className="wrapImg51" alt="imggraph1" />
            <Image src={graph2} className="wrapImg52" alt="imggraph1" />
            <Image src={graph3} className="wrapImg53" alt="imggraph1" />
          </div>
        </div>
        <div className="sectionMission6">
          <div className="titleBlock">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Il m’est arrivé aussi de réaliser des missions qui sortent de
                mon travail de produit et de me concentrer sur l’aura de
                l’entreprise. En effet, l’image de Supermood se doit d’être
                éthique avec nos valeurs. Nous sommes Supermood, une entreprise
                dans laquelle l’humain est au centre. Il est donc primordial de
                réaliser un mini-branding.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Branding sur les emails
            </h4>
          </div>
          <div className="wrapImg6">
            <Image src={email1} className="wrapImg61" alt="imgEmail1" />
            <Image src={email2} className="wrapImg62" alt="imgEmail2" />
            <Image src={email3} className="wrapImg63" alt="imgEmail3" />
          </div>
        </div>
        <div className="sectionMission7">
          <div className="titleBlock2">
            <div>
              <h4 className={`${criteria.className} titleSupermood`}>
                Missions
              </h4>
              <p>
                Il m’est arrivé aussi de réaliser des missions qui sortent de
                mon travail de produit et de me concentrer sur l’aura de
                l’entreprise. En effet, l’image de Supermood se doit d’être
                éthique avec nos valeurs. Nous sommes Supermood, une entreprise
                dans laquelle l’humain est au centre. Il est donc primordial de
                réaliser un mini-branding.
              </p>
            </div>
            <h4 className={`${criteria.className} titleSupermood`}>
              Branding sur les meetings
            </h4>
          </div>
          <div className="wrapImg7">
            <Image src={meet1} className="wrapImg71" alt="imgMeet1" />
            <Image src={meet2} className="wrapImg72" alt="imgMeet2" />
            <Image src={meet3} className="wrapImg73" alt="imgMeet3" />
          </div>
        </div>
        <div className="sectionScreen">
          <h4 className={`${criteria.className} titleSupermood2`}>
            Voici quelques screens 🤫
          </h4>
          <Image src={template} alt="imgTemplate" />
        </div>
      </div>
    </div>
  );
}
