import React from 'react';

const ExperienceList = ({ experiences }) => {
  return (
    <div className='experienceTab'>
      <h3>Expériences</h3>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} className='experienceLink'>
            {experience.title} at {experience.company} <br />
            {experience.startDate} - {experience.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
