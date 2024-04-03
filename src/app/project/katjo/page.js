import React from 'react';
//import projectImgMobile from '@/app/assets/img/project/katjo/project1mobile.svg';
import hugJo from '@/app/assets/img/project/katjo/hugJo.svg';
import Image from 'next/image';
import Top from '@/app/components/top/top';
import concept from '@/app/assets/img/project/katjo/conpcet.svg';
import sprint1 from '@/app/assets/img/project/katjo/sprint/sprint1.svg';
import sprint2 from '@/app/assets/img/project/katjo/sprint/sprint2.svg';
import sprint3 from '@/app/assets/img/project/katjo/sprint/sprint3.svg';
import sprint4 from '@/app/assets/img/project/katjo/sprint/sprint4.svg';
import billet from '@/app/assets/img/project/katjo/wireframe/Billet.svg';
import conseil1 from '@/app/assets/img/project/katjo/wireframe/Conseil1.svg';
import conseil2 from '@/app/assets/img/project/katjo/wireframe/Conseil2.svg';
import conseil3 from '@/app/assets/img/project/katjo/wireframe/Conseil3.svg';
import design from '@/app/assets/img/project/katjo/design.svg';
import object from '@/app/assets/img/project/katjo/objectif.svg';
import designMobile from '@/app/assets/img/project/katjo/designMobile.svg'
import '../project.css';
import Link from 'next/link';
 
export const metadata = {
  title: 'KatJo',
  description: 'Portfolio Annie Tran ATTH Studio KatJo',
};

export default function Project() {    
  return (
    <div className="main">
      <Top />
      <div className="section">
        <Image
          className='imgTopProject'
          width={320}
          height={867}
          priority
          src="/asset/img/katjo/project1img.svg"
          alt='imgTopProject'
        ></Image>
        <p className='titleDesignMobileid'>001-KATJO</p>
        <h3 className='titleDesignMobile'>KatJo catches JO Paris 2024</h3>
        <Image
          className='imgTopProjectMobile'
          width={365}
          height={489}
          src="/asset/img/katjo/project1mobile.svg"
          alt='projectImgMobile'
        ></Image>
        <p className='btnAplication'>Application mobile</p>
        <div className="content">
          <h3 className='titleDesign1'>KatJo catches JO Paris 2024</h3>
          <p>Application mobile - Design sprint </p>
          <div className='pitch'>
            <div className='pitchcontent'>
              <h5>Pitch</h5>
              <p>Imagine the future collaborative application of Paris 2024, centered on users (transport, tickets, activities, Olympic sites, connectivity, etc.)</p>
              <h5>Duration</h5>
              <p>10 weeks</p>
            </div>
            <div className='pitchbotom'>
              <h5>Team</h5>
              <ul>
                <li>Katia Hie - Product Designer</li>
                <li>Annie Tran - Product Designer</li>
                <li>Yanis El Bouchtaoui - UX/UI designer</li>
                <li>Audrey Michaud - UX/UI designer</li>
                <li>Ines Bensmaine - Graphiste</li>
                <li>Victoire Lecamus - Product Manager</li>
              </ul>
            </div>
          </div>
          <Image
            className='separationBar'
            src={hugJo}
            alt='separation bar KatJo'
          ></Image>
          <h3 className='titleDesign'>Objectifs</h3>
          <Image
            className='ojectifImg'
            src={object}
            alt='ojectif'
          ></Image>
          <div className='objectif'>
            <div>
              <p className='numberObjectif'>1</p>
              <h5>Virtual map</h5>
              <ul>
                <li>Move around the JO site</li>
                <li>Have the tickets and details</li>
                <li>Add tickets</li>
              </ul>
            </div>
            <div>
              <p className='numberObjectif'>2</p>
              <h5>Information</h5>
              <ul>
                <li>Centralize all important information about Paris</li>
                <li>Indication on the emergency contact list</li>
              </ul>
            </div>
             <div>
              <p className='numberObjectif'>3</p>
              <h5>Virtual map</h5>
              <ul>
                <li>Applications to move (Google map, RATP, Citymapper)</li>
              </ul>
            </div>
          </div>
          <h3 className='titleDesign'>Design Sprint</h3>
          <div className='sprint'>
            <Image
              src={sprint1}
              alt='Sprint 1'
            ></Image>
            <Image
              src={sprint2}
              alt='Sprint 2'
            ></Image>
            <Image
              src={sprint3}
              alt='Sprint 3'
            ></Image>
            <Image
              src={sprint4}
              alt='Sprint 4'
            ></Image>
          </div>
          <h3 className='titleDesign'>Concept</h3>
          <div className='concept'>
            <h4>KatJO</h4>
            <Image
              className='conceptImg'
              src={concept}
              alt='concept'
            ></Image>
          </div>
          <h3 className='titleDesign'>Wireframe</h3>
          <div className='wireframe'>
            <Image
              src={billet}
              alt='billet'
            ></Image>
            <Image
              src={conseil1}
              alt='conseil 1'
            ></Image>
            <Image
              src={conseil2}
              alt='conseil 2'
            ></Image>
            <Image
              src={conseil3}
              alt='conseil 3'
            ></Image>
          </div>
          <h3 className='titleDesign'>Design</h3>
          <Image
            className='imgDesign'
            src={design}
            alt='design'
          ></Image>
          <Image
            className='imgDesignMobile'
            src={designMobile}
            alt='designMobile'
          ></Image>
          <Link
            href={'https://www.behance.net/annietran8'}
            target="_blank"
            className='behancelink'>Behance</Link>
        </div>
      </div>
    </div>
  )
}
