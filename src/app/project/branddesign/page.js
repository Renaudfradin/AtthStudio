import React from 'react';
import Top from '@/app/components/top/top';
import Image from 'next/image';
import localFont from 'next/font/local';
import a from '@/app/assets/img/project/branddesign/designA.svg';
import t from '@/app/assets/img/project/branddesign/designT.svg';
import h from '@/app/assets/img/project/branddesign/designH.svg';
import logo1 from '@/app/assets/img/project/branddesign/logo1.svg';
import logo2 from '@/app/assets/img/project/branddesign/logo2.svg';
import logodesign from '@/app/assets/img/project/branddesign/logo3design.svg';
import cv from '@/app/assets/img/project/branddesign/cvPoster.svg';
import website from '@/app/assets/img/project/branddesign/websiteTemplate.svg';
import degree from '@/app/assets/img/project/branddesign/degree.svg';
import '../project.css';
import './branddesign.css';

const letterMagic = localFont({
  src: './Letter_Magic.ttf',
});

const dTRandom = localFont({
  src: './DTRandomDisplay-Regular.otf',
});

export const metadata = {
  title: 'Brand Design',
  description: 'Portfolio Annie Tran ATTH Studio Brand Design',
};

export default function Project() {
  return (
    <div className="main">
      <Top />
      <div className="section">
        <Image
          className="imgTopProject"
          width={320}
          height={867}
          priority
          src="/asset/img/branddesign/topProjetBranddesign.svg"
          alt="imgTopProject"
        ></Image>
        <p className="titleDesignMobileid">004-Product Design</p>
        <h3 className="titleDesignMobile">Refonte UX design</h3>
        <Image
          className="imgTopProjectMobile"
          width={365}
          height={489}
          src="/asset/img/branddesign/topProjectMobile.svg"
          alt="projectImgMobile"
        ></Image>
        <p className="btnAplication">Product Design</p>
        <div className="sectionBrandMain">
          <div>
            <h3 className="titleBrand">Typography</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionTypography">
              <Image
                className="imgTypography"
                src={logo1}
                alt="imgTypography"
              ></Image>
              <div>
                <p className="typoManroque">
                  There are 2 different typographies on this logo
                </p>
                <p className={`${dTRandom.className} typoDT`}>
                  DT random Display
                </p>
                <p className={`${letterMagic.className} typoLMagique`}>
                  Letter magic
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="titleBrand">Processus</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionProcessus">
              <Image src={a} alt="imgA"></Image>
              <Image src={t} alt="imgT"></Image>
              <Image src={t} alt="imgT"></Image>
              <p>
                I took my initial name I added with the initials of my 2nd name
              </p>
              <Image src={h} alt="imgH"></Image>
              <p>
                Having 2 letter T, I played with it ! H is one of my creations
              </p>
            </div>
          </div>
          <div>
            <h3 className="titleBrand">Logo</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionLogo">
              <Image src={logodesign} alt="imgDegree"></Image>
              <p>
                I played with the thickness of the letters and the pixelation of
                them I adjusted the spacing to 20px
              </p>
            </div>
          </div>
          <div>
            <h3 className="titleBrand">Curriculem Vitae</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionCurriculemVitae">
              <Image src={cv} alt="imgDegree" priority></Image>
            </div>
          </div>
          <div>
            <h3 className="titleBrand">Website</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionWebsite">
              <Image src={website} alt="imgDegree" priority></Image>
            </div>
          </div>
          <div>
            <h3 className="titleBrand">Experience / Degree</h3>
            <div className="horizontalBarBrand" />
            <div className="sectionExperienceDegree">
              <Image src={degree} alt="imgDegree"></Image>
            </div>
          </div>
          <div>
            {/* <h3 className='titleBrand'>Contact me !</h3> */}
            {/* <div className='horizontalBarBrand'/> */}
            <div className="sectionContact">
              <Image src={logo2} alt="imgLogoProject2"></Image>
              <h2>Thank You</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
