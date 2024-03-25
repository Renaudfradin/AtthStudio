import React from 'react';
import projectImg1 from '@/app/assets/img/project/hestia/topProjetHestia.svg';
import projectImgMobile from '@/app/assets/img/project/hestia/topProjectHestiaMobile.svg';
import Image from 'next/image';
import Top from '@/app/components/top/top';
import wireframe from '@/app/assets/img/project/hestia/wireframe.svg';
import umlPartcour from '@/app/assets/img/project/hestia/umlPartcour.svg';
import design from '@/app/assets/img/project/hestia/design.svg';
import home from '@/app/assets/img/project/hestia/Home.svg';
import designMobile from '@/app/assets/img/project/hestia/designMobile.svg'
import rectangle from '@/app/assets/img/project/hestia/rectangle.svg';
import '../project.css';

export const metadata = {
  title: 'Hestia',
  description: 'Portfolio Annie Tran ATTH Studio Hestia',
};

export default function project() {    
  return (
    <div className="main">
      <Top />
      <div className="section">
        <Image
          className='imgTopProject'
          src={projectImg1}
          alt='imgTopProject'
        ></Image>
        <Image
          className='imgTopProjectMobile'
          src={projectImgMobile}
          alt='projectImgMobile'
        ></Image>
        <div className="content">
          <h3 className='titleDesign1'>Achetez en confiance, vendez rapidement</h3>
          <p>Application mobile - site web</p>
          <div className='pitch'>
            <div className='pitchcontent'>
              <h5>Pitch</h5>
              <p>Découvrez la nouvelle de l’immobilier 2.0. Nous vous offrons une expérience transparente, efficace et sécurisée, mettant en relation vendeurs et acheteurs de biens immobiliers</p>
              <h5>Duration</h5>
              <p>1 week</p>
            </div>
            <div className='pitchbotom'>
              <h5>Team</h5>
              <ul>
                <li>Lars Vernier - Directeur Artistique</li>
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
              <h5>Achetez en confiance</h5>
              <p className='detailObjectifHestia'>Nous sélectionnons pour vous les meilleurs candidats pour vos bien!</p>
            </div>
            <div>
              <p className='numberObjectifHestia'>2</p>
              <h5>Accompagnement</h5>
              <p className='detailObjectifHestia'>Sélectionner le motif de votre préférence tous les mois pour vos couches.</p>
            </div>
             <div>
              <p className='numberObjectifHestia'>3</p>
              <h5>Vendez rapidement</h5>
              <p className='detailObjectifHestia'>Nous mettons en relations des profils  qui vous conviennent.</p>
            </div>
          </div>
          <h3 className='titleDesign'>Map UX view</h3>
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
          ></Image>
          {/* <Image
            className='imgDesign'
            src={home}
            alt='design'
          ></Image> */}
          <Image
            className='imgDesignMobile'
            src={designMobile}
            alt='designMobile'
          ></Image>
        </div>
      </div>
    </div>
  )
}