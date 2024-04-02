import Image from 'next/image';
import Link from 'next/link';
import background from './assets/img/background/pathback.svg';
import backgroundMobile from './assets/img/background/backgroundMobile.svg';
import Navbar from './components/navbar/navbar.js';
import ListProject from './components/listProject/listProject.js';
import ListExperience from './components/listExperience/listExperience.js';

export default function Home() {
  return (
    <main>
      <div className='homePage' id='homePage'>
        <div className='navbarPage'>
          <Navbar />
        </div>
        <div className='flexMain'>
          <div className='homeMain'>
            <Image
              width={320}
              height={500}
              priority
              src="/asset/logo1.svg"
              alt='logo ATTH Studio'
            ></Image>
            <div>
              <p className='titleNumber'>Portfolio #004</p>
              <h2 className='titleHome'>PRODUCT DESIGN</h2>
              <div>
                <h4 className='titleUi'>UX/UI DESIGN</h4>
                <p className='titleHumour'>SPECIALIZING OF HUMOUR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='workPage' id='workPage'>
        <Image
          src={background}
          className='imgBackground'
          alt='background img'
          fill
          objectFit='cover'
        ></Image>
        <Image
          src={backgroundMobile}
          className='imgBackgroundMobile'
          alt='background img mobile'
          fill
          objectFit='cover'
        ></Image>
        <ListProject />
      </div>
      <div className='aboutPage' id='aboutPage'>
        <div className='aboutMain'>
          <div className='blockExperience'>
            <h2>Annie Tran </h2>
            <h2>Product designer & Creative Freelance based in Paris</h2>
            <ListExperience />
          </div>
          <div className='blockAbout'>
            <Image
              width={500}
              height={500}
              priority
              className='logoatthstudio'
              src="/asset/logo2.svg"
              alt='logo ATTH Studio'
            ></Image>
            <div>
              <Link href={'cv/cv_annie_tran.pdf'} target="_blank">RESUME</Link>
              <Link href={'https://www.instagram.com/_atthdesign/'} target="_blank">INSTAGRAM</Link>
              <Link href={'https://bento.me/annie-tran'} target="_blank">BENTO</Link>
            </div>
          </div>
        </div>
        <div className='footerAboot'>
          <Link href={'mailto:annietth.pro@gmail.com'}>ACCEPTING PROJECT FOR 2024</Link>
          <Link href={'https://www.malt.fr/profile/annietran'} target="_blank">LOOKING FOR JOBS</Link>
        </div>
      </div>
    </main>
  );
}
