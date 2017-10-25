import React from 'react';
import { Link } from 'react-router-dom';


const Navegation = () => {
  return (
    <div>
      <span>
        <Link to="/visualizations/1">
          <p>Link</p>
        </Link>
      </span>
    </div>
  );
};


export default Navegation;
