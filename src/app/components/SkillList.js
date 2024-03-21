import React from 'react';

const SkillList = ({ skills }) => {
  return (
    <div className='experienceTab'>
      <h3>Skills</h3>
      <ul>
        {skills.map((skillCategory, index) => (
          <div className='skillLink' key={index}>
            {skillCategory.list.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
