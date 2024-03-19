import Image from "next/image";
import Link from "next/link";
import logo1 from "./assets/img/logo1.svg";
import logo2 from "./assets/img/logo2.svg";

export default function Home() {
  return (
    <main className="">
      <div className="homePage">
        <div className="navbar">
          <Link href="/">HOME</Link>
          <Link href="#workPage">WORKS</Link>
          <Link href="#aboutPage">CONTACTS</Link>
        </div>
        <div className="homeMain">
          <Image
            src={logo1}
          ></Image>
          <div>
            <p>Portfolio #004</p>
            <p className="titleHome">PRODUCT DESIGN</p>
            <div>
              <p className="titleUi">UX/UI DESIGN</p>
              <p className="titleHumour">SPECIALIZING OF HUMOUR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="workPage" id="workPage">
        <p>441</p>
        {/* <Image
          src={}
          href={}
        ></Image> */}
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
                <li className="experienceLink">Product Designer at Supermood 2023-2024</li>
                <li className="experienceLink">Product Designer at Supermood 2023-2024</li>
                <li className="experienceLink">Product Designer at Supermood 2023-2024</li>
                <li className="experienceLink">Product Designer at Supermood 2023-2024</li>
              </ul>
            </div>
            <div className="degreeTab">
              <h3>Degree</h3>
              <ul>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
              </ul>
            </div>
            <div className="degreeTab">
              <h3>Skills</h3>
              <ul>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
              </ul>
              <ul>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
                <li className="degreeLink">THREE.JS JOURNEY BRUNO SIMON 2024</li>
              </ul>
            </div>
          </div>
          <Image
            src={logo2}></Image>
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
