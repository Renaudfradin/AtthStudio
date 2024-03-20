import Image from "next/image";
import Link from "next/link";
import logo1 from "./assets/img/logo1.svg";
import logo2 from "./assets/img/logo2.svg";
import background from "./assets/img/background.svg";

export default function Home() {
  return (
    <main className="">
      <div className="homePage" id="homePage">
        <div className="navbar">
          <Link href="#homePage">HOME</Link>
          <Link href="#workPage">WORKS</Link>
          <Link href="#aboutPage">CONTACTS</Link>
        </div>
        <div className="flexMain">
          <div className="homeMain">
            <Image
              src={logo1}
              alt="logo At Studio"
            ></Image>
            <div>
              <p className="titleNumber">Portfolio #004</p>
              <p className="titleHome">PRODUCT DESIGN</p>
              <div>
                <p className="titleUi">UX/UI DESIGN</p>
                <p className="titleHumour">SPECIALIZING OF HUMOUR</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="workPage" id="workPage">
        <Image
          src={background}
          className="imgBackground"
          alt="background img"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="aboutPage" id="aboutPage">
        <p className="">About me</p>
        <div className="aboutMain">
          <div>
            <h2>Annie Tran </h2>
            <h2>Product designer & Creative Freelance based in Paris</h2>
            <div className="experienceTab">
              <h3>Expériences</h3>
              <ul>
                <li className="experienceLink">Product Designer at Supermood <br />2023-2024</li>
                <li className="experienceLink">Product Designer at Agily <br />2022-2023</li>
                <li className="experienceLink">Develop Web at Publicis Group <br />2020-2022</li>
                <li className="experienceLink">Develop Web & Lead Design at Docndoc <br />06/2020-09/2020</li>
              </ul>
            </div>
            <div className="degreeTab">
              <h3>Degree</h3>
              <ul>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON <br />2024</li>
                <li className="degreeLink">CDO-PRODUCT DESIGN EEMI <br />2022-2024</li>
                <li className="degreeLink">Web developer HETIC <br />2019-2022</li>
              </ul>
            </div>
            <div className="experienceTab">
              <h3>Skills</h3>
              <ul>
                <div className="skillLink">
                  <li>Experience Design</li>
                  <li>Production</li>
                  <li>Web Developement</li>
                </div>
                <div className="experienceLink">
                  <li>User testing</li>
                  <li>Design strategy</li>
                  <li>Design Thinking process</li>
                </div>
                <div className="experienceLink">
                  <li>Design System</li>
                  <li>Brainstorming</li>
                  <li>Accessibility</li>
                </div>
                <div className="experienceLink">
                  <li>Agily methodology</li>
                  <li>Presenting</li>
                  <li>CMS</li>
                </div>
              </ul>
            </div>
          </div>
          <Image
            src={logo2}
            alt="logo At Studio"
          ></Image>
        </div>
        <div className="footerAboot">
          <p>ACCEPTING PROJECT FOR 2024</p>
          <p>or</p>
          <p>ACCEPTING PROJECT FOR 2024</p>
        </div>
      </div>
    </main>
  );
}