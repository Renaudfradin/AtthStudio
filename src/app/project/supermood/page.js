import React from 'react';
import Image from 'next/image';
import Top from '@/app/components/top/top';
import mockup from '@/app/assets/img/project/supermood/mockup.svg';
import email1 from '@/app/assets/img/project/supermood/EmailBody1.svg';
import email2 from '@/app/assets/img/project/supermood/EmailBody2.svg';
import email3 from '@/app/assets/img/project/supermood/EmailBody3.svg';
import meet1 from '@/app/assets/img/project/supermood/meet-background1.svg';
import meet2 from '@/app/assets/img/project/supermood/meet-background2.svg';
import meet3 from '@/app/assets/img/project/supermood/meet-background3.svg';
import template from '@/app/assets/img/project/supermood/template.svg';
import '../project.css';
import './supermood.css';

export const metadata = {
  title: 'Supermood',
  description: 'Portfolio Annie Tran ATTH Studio Supermood',
};

export default function Project() {    
  return (
    <div className='main'>
      <Top />
      <div className='section'>
        <div className='sectionSaas'>
          <div>
            <p>Starting Overview</p>
            <h4>PLATFORM SASS</h4>
            <p>“</p>
            <p>Supermood, la solution de feedback instantané simple et efficace, partagée dans toute l’entreprise</p>
          </div>
          <Image
            src={mockup}
            alt='imgMockup'
          />
        </div>
        <div className='sectionValues'>
          <h4>VALUES</h4>
          <div>
            <p>On se bat pour gagner du temps</p>
            <p>On se bat pour la transparence</p>
            <p>On se bat pour l’empowerment</p>
            <p>On se bat pour la transformation</p>
            <p>On se bat contre le court-termisme</p>
            <p>On se bat pour valoriser la fonction RH</p>
          </div>
        </div>
        <div className='sectionMission'>
          <div>
            <h4>Missions DESIGN SYSTEM</h4>
            <p>En tant que product designer, j’utilise la méthodologie de l’Atomic Design pour structurer et créer des systèmes d’interface utilisateur efficaces et cohérents. J’ai travaillé en collaboration avec les développeurs afin de créer un design system pertinent et intuitif pour avoir une cohésion entre-nous. J’ai designé de A à Z, soit de l’atome au prototypage.</p>
          </div>
        </div>
        <div className='sectionMission2'>
          <div>
            <h4>Missions DESIGN SYSTEM - ROKIT</h4>
            <p>Nous nous sommes inspirés de Material UI pour créer notre propre documentation sur Rokit. Pour cela, nous avons réalisé l’anatomie des composants de type (button, input, select, checkbox, tooltips, tips) en énumérant leurs variations et en prototypant les moments où l’élément se déclenche. Participation active et réalisation de nombreux composants.</p>
          </div>
        </div>
        <div className='sectionMission3'>
          <div>
            <h4>Missions Déclinaison des fonctionnalités</h4>
            <p>Notre objectif est d’améliorer constamment la plateforme en augmentant ses fonctionnalités et en rendant le travail plus accessible. Après des sessions de brainstorming avec les PM, PO et les product designers, nous nous occupons de toutes les réalisations pour fluidifier le travail. J’ai pris en charge la déclinaison de certaines fonctionnalités de la plateforme SaaS pour que chaque développeur puisse les implémenter. Je m’assure de suivre les principes de conception, tels que la règle des 8, la loi de proximité et l’utilisation de design tokens. Mon but est de rendre le prototypage fluide et compréhensible pour les développeurs.</p>
          </div>
        </div>
        <div className='sectionMission4'>
          <div>
            <h4>Missions Challenger le layout</h4>
            <p>Ma mission principale en entrant dans l’entreprise était de challenger la nouvelle plateforme SaaS pour la rendre plus compréhensible, fonctionnelle et surtout pour comprendre les résultats. Dans un premier temps, je réalise un screenshot de toute la plateforme. Je fais un audit concurrentiel de Bastien & Scapin. Ensuite, j’établis une réunion avec les CX, PM et PO, ceux qui ont travaillé plusieurs fois sur la plateforme, pour que nous soulignions tous les problèmes ou accroches que les utilisateurs ont avec la plateforme. Ensuite, je réalise une matrice de valeurs pour émettre plusieurs hypothèses possibles.</p>
          </div>
          {/* <Image /> */}
        </div>
        <div className='sectionMission5'>
          <div>
            <h4>Missions Challenger le layout</h4>
            <p>Je me challenge sur le côté graphique pour rendre le travail un peu plus compréhensible. Je réalise également beaucoup de lectures. À chaque finalité de mon travail, je réalise un test A/B pour visualiser ce que les utilisateurs comprennent et ce qu’ils ne comprennent pas. Bien entendu, avant de réaliser, je demande une confirmation à mon lead designer. Malheureusement, je ne peux pas vous montrer le travail final, car il n’est pas encore disponible sur la plateforme.</p>
          </div>
        </div>
        <div className='sectionMission6'>
          <div>
            <h4>Missions Branding sur les emails</h4>
            <p>Il m’est arrivé aussi de réaliser des missions qui sortent de mon travail de produit et de me concentrer sur l’aura de l’entreprise. En effet, l’image de Supermood se doit d’être éthique avec nos valeurs. Nous sommes Supermood, une entreprise dans laquelle l’humain est au centre. Il est donc primordial de réaliser un mini-branding.</p>
          </div>
          <div>
            <Image
              src={email1}
              alt='imgEmail1'
            />
            <Image
              src={email2}
              alt='imgEmail2'
            />
            <Image
              src={email3}
              alt='imgEmail3'
            />
          </div>
        </div>
        <div className='sectionMission7'>
          <div>
            <h4>Missions Branding sur les meetings</h4>
            <p>Il m’est arrivé aussi de réaliser des missions qui sortent de mon travail de produit et de me concentrer sur l’aura de l’entreprise. En effet, l’image de Supermood se doit d’être éthique avec nos valeurs. Nous sommes Supermood, une entreprise dans laquelle l’humain est au centre. Il est donc primordial de réaliser un mini-branding.</p>
          </div>
          <div>
            <Image
              src={meet1}
              alt='imgMeet1'
            />
            <Image
              src={meet2}
              alt='imgMeet2'
            />
            <Image
              src={meet3}
              alt='imgMeet3'
            />
          </div>
        </div>
        <div className='sectionScreen'>
          <h4>Missions Branding sur les meetings</h4>
          <Image
            src={template}
            alt='imgTemplate'
          />
        </div>
      </div>
    </div>
  );
}
