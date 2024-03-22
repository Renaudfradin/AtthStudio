import React from 'react';
import projectImg1 from '@/app/assets/img/project/katjo/project1img.svg';
import hugJo from '@/app/assets/img/project/katjo/hugJo.svg';
import Image from 'next/image';
import Top from '@/app/components/top/top';
import sprint1 from '@/app/assets/img/project/katjo/sprint/sprint1.svg'
import sprint2 from '@/app/assets/img/project/katjo/sprint/sprint2.svg'
import sprint3 from '@/app/assets/img/project/katjo/sprint/sprint3.svg'
import sprint4 from '@/app/assets/img/project/katjo/sprint/sprint4.svg'
import billet from '@/app/assets/img/project/katjo/wireframe/Billet.svg'
import conseil1 from '@/app/assets/img/project/katjo/wireframe/Conseil1.svg'
import conseil2 from '@/app/assets/img/project/katjo/wireframe/Conseil2.svg'
import conseil3 from '@/app/assets/img/project/katjo/wireframe/Conseil3.svg'
//import concept from '@/app/assets/img/project/katjo/concept.svg'
import design from '@/app/assets/img/project/katjo/design.svg'
import designMobile from '@/app/assets/img/project/katjo/designMobile.svg'
import '../project.css';
 
export const metadata = {
  title: 'KatJo',
  description: 'Portfolio Annie Tran ATTH Studio KatJo',
};

export default function project() {    
  return (
    <div className="main">
      <Top />
      <div className="section">
        <Image src={projectImg1}></Image>
        <div className="content">
          <h3 className='titleDesign'>KatJo catches JO Paris 2024</h3>
          <p>Application mobile - Design sprint </p>
          <div className='pitch'>
            <div>
              <h5>Pitch</h5>
              <p>Imagine the future collaborative application of Paris 2024, centered on users (transport, tickets, activities, Olympic sites, connectivity, etc.)</p>
              <h5>Duration</h5>
              <p>10 weeks</p>
            </div>
            <div>
              <h5>Team</h5>
              <p>ddddddd</p>
            </div>
          </div>
          <Image src={hugJo} alt='hug'></Image>
          <h3 className='titleDesign'>Objectifs</h3>
          <div className='objectif'>
            <div><p>virtual map</p></div>
            <div><p>information</p></div>
            <div><p>app</p></div>
          </div>
          <h3 className='titleDesign'>Design Sprint</h3>
          <div className='sprint'>
            <Image src={sprint1}></Image>
            <Image src={sprint2}></Image>
            <Image src={sprint3}></Image>
            <Image src={sprint4}></Image>
          </div>
          <h3 className='titleDesign'>Concept</h3>
          
          <h3 className='titleDesign'>Wireframe</h3>
          <div className='wireframe'>
            <Image src={billet}></Image>
            <Image src={conseil1}></Image>
            <Image src={conseil2}></Image>
            <Image src={conseil3}></Image>
          </div>
          <h3 className='titleDesign'>Design</h3>
          <Image src={design}></Image>
        </div>
      </div>
    </div>
    )
}
