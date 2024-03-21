import React from 'react';

const DegreeList = ({ degrees }) => {
  return (
    <div className='degreeTab'>
      <h3>Degree</h3>
      <ul>
        {degrees.map((degree, index) => (
          <li key={index} className='degreeLink'>
            {degree.degree} <br />
            {degree.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DegreeList;