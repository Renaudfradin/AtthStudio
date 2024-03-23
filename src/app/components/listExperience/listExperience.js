import React from 'react';
import { experiences } from './experience';
import './listExperience.css';

export default function listExperience() {
  return (
      <>
        <div className='experienceTab'>
          <h3>Expériences</h3>
          <ul>
            <li className='experienceLink'>Product Designer at Supermood <br />2023-2024</li>
            <li className='experienceLink'>Product Designer at Agily <br />2022-2023</li>
            <li className='experienceLink'>Develop Web at Publicis Group <br />2020-2022</li>
            <li className='experienceLink'>Develop Web & Lead Design at Docndoc <br />06/2020-09/2020</li>
          </ul>
        </div>
        <div className='degreeTab'>
          <h3>Degree</h3>
          <ul>
            <li className='degreeLink'>THREE.JS JOURNEY BRUNO SIMON <br />2024</li>
            <li className='degreeLink'>CDO-PRODUCT DESIGN EEMI <br />2022-2024</li>
            <li className='degreeLink'>Web developer HETIC <br />2019-2022</li>
          </ul>
        </div>
        <div className='experienceTab'>
          <h3>Skills</h3>
          <ul>
            <div className='skillLink'>
              <li>Experience Design</li>
              <li>Production</li>
              <li>Web Developement</li>
            </div>
            <div className='experienceLink'>
              <li>User testing</li>
              <li>Design strategy</li>
              <li>Design Thinking process</li>
            </div>
            <div className='experienceLink'>
              <li>Design System</li>
              <li>Brainstorming</li>
              <li>Accessibility</li>
            </div>
            <div className='experienceLink'>
              <li>Agily methodology</li>
              <li>Presenting</li>
              <li>CMS</li>
            </div>
          </ul>
        </div>
    </>
  )
}
