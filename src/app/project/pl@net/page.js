import React from 'react';
import Top from '@/app/components/top/top';
import Image from 'next/image';
import Link from 'next/link';
import rectangle from '@/app/assets/img/project/pl@net/rectangle.svg';
import hypothèses from '@/app/assets/img/project/pl@net/hypothèses.svg';
import messagereconnaissances from '@/app/assets/img/project/pl@net/messagereconnaissances.svg';
import notification from '@/app/assets/img/project/pl@net/notification.svg';
import onboarding from '@/app/assets/img/project/pl@net/onboarding.svg';
import matrice from '@/app/assets/img/project/pl@net/matrice.svg';
import fleur from '@/app/assets/img/project/pl@net/logo/fleur.svg';
import wiki from '@/app/assets/img/project/pl@net/logo/wiki.svg';
import len from '@/app/assets/img/project/pl@net/logo/len.svg';
import '../project.css';

export const metadata = {
  title: 'Pl@net',
  description: 'Portfolio Annie Tran ATTH Studio Pl@net',
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
          src="/asset/img/pl@net/topProjet.svg"
          alt='imgTopProject'
        ></Image>
        <p className='titleDesignMobileid'>002-Pl@nt.net</p>
        <h3 className='titleDesignMobile'>Refonte UX design</h3>
        <Image
          className='imgTopProjectMobile'
          width={365}
          height={489}
          src="/asset/img/pl@net/topProjectMobile.svg"
          alt='projectImgMobile'
        ></Image>
        <p className='btnAplication'>Application mobile</p>
        <Link
          href={'https://www.behance.net/annietran8'}
          target="_blank"
          className='behancelink'
        >Behance</Link>
        {/* <div className="content">
          <h3 className='titleDesign1'>Refonte UX design</h3>
          <p>Application mobile - UX Design - UX research - Test utilisateur - Analyse</p>
        </div> */}
           {/*<div className='pitch'>
            <div className='pitchcontent'>
              <h5>Pitch</h5>
              <p>Pl@ntNet est une application qui permette d’identifier les plantes simplement en les photographiant avec votre smartphone. Un grand projet de sciences participatives : toutes les plantes que vous photographiez sont collectées et analysées par des scientifiques du monde entier afin de mieux comprendre l’évolution de la biodiversité végétale et de mieux la préserver.</p>
              <h5>Duration</h5>
              <p>10 week</p>
            </div>
            <div className='pitchbotom'>
              <h5>Team</h5>
              <ul>
                <li>Katia Hie - Product Designer</li>
                <li>Annie Tran - Product Designer</li>
              </ul>
            </div>
          </div>
          <h3 className='titleDesign'>Brief</h3>
          <Image
            className='ojectifImg'
            src={rectangle}
            alt='rectangle hestia'
          ></Image>
          <div className='objectifHestia'>
            <div>
              <p className='numberObjectifHestia'>1</p>
              <p className='detailObjectifHestia'>Increase community participation in information validation</p>
            </div>
            <div>
              <p className='numberObjectifHestia'>2</p>
              <p className='detailObjectifHestia'>Increase user engagement after download</p>
            </div>
             <div>
              <p className='numberObjectifHestia'>3</p>
              <p className='detailObjectifHestia'>Promote scientific and international interest</p>
            </div>
             <div>
              <p className='numberObjectifHestia'>4</p>
              <p className='detailObjectifHestia'>Minimize access to “species” with classification</p>
            </div>
            <div>
              <p className='numberObjectifHestia'>5</p>
              <p className='detailObjectifHestia'>Improve the clarity of the onboarding journey</p>
            </div>
             <div>
              <p className='numberObjectifHestia'>6</p>
              <p className='detailObjectifHestia'>Gain in clarity</p>
            </div>
          </div>
          <h3 className='titleDesign'>Benchmark concurentielle</h3>
          <div className='matrice'>
            <Image
              className='wireframeimg'
              src={fleur}
              alt='fleur'
            ></Image>
            <Image
              className='wireframeimg'
              src={wiki}
              alt='wiki'
            ></Image>
            <Image
              className='wireframeimg'
              src={len}
              alt='len'
            ></Image>
          </div>
          <h3 className='titleDesign'>Matrice intérêt et pouvoir</h3>
          <div className='matrice'>
            <Image
              className='wireframeimg'
              src={matrice}
              alt='matrice'
            ></Image>
            <div>
              <p>En utilisant Miro, nous avons pu réalisé une matrice permettant de groupé nos hypothèses à l’échelle + de valeur et + d’effort. Ainsi nous avons pu trouvé 3 must-haves qu’on pourrait améliorer dont :</p>
              <ul>
                <li>Nous pensons que les experts ne sont pas assez valorisé</li>
                <li>Nous pensons que les experts ne sont pas assez valorisé</li>
                <li>Nous pensons que les utilisateurs perdent de l’engagement à causes d’un manque de valorisation de participation</li>
              </ul>
            </div>
          </div>
          <h3 className='titleDesign'>3 hypothèses</h3>
          <Image
            className='wireframeimg'
            src={hypothèses}
            alt='hypothèses'
          ></Image>
          <h3 className='titleDesign'>3 must-haves</h3>
          <p>Onboarding</p>
          <Image
            className='wireframeimg'
            src={onboarding}
            alt='onboarding'
          ></Image>
          <p>Notification</p>
          <Image
            className='wireframeimg'
            src={notification}
            alt='notification'
          ></Image>
          <p>Message et reconnaissances</p>
          <Image
            className='wireframeimg'
            src={messagereconnaissances}
            alt='messagereconnaissances'
          ></Image> */}

          {/* <h3 className='titleDesign'>Map UX view</h3>
          <Image
            className='wireframeimg'
            src={umlPartcour}
            alt='Map UX view hestia'
          ></Image>
          <h3 className='titleDesign'>Wireframes (APP)</h3>
          <Image
            className='wireframeimg'
            src={wireframe}
            alt='wireframe hestia'
          ></Image>
          <h3 className='titleDesign'>Design</h3>
          <Image
            className='imgDesign'
            src={design}
            alt='design'
          ></Image> */}
          {/* <Image
            className='imgDesign'
            src={home}
            alt='design'
          ></Image> */}
          {/* <Image
            className='imgDesignMobile'
            src={designMobile}
            alt='designMobile'
          ></Image> */}
        </div>
      </div>
    // </div>
  )
}