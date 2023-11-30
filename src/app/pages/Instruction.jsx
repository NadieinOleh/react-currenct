/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.scss';

const Instruction = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Instruction</h1>
      <div className="text-center border border-primary border-2 rounded-2 p-4 mb-2 fs-5">
        <h2>Auth page</h2>
        <p>You need to log in </p>
        <p>login: 'testLogin22'</p>
        <p>password: 's#dDA23@44#Ds'</p>
      </div>

      <div className="text-center border border-primary border-2 rounded-2 p-4 mb-2 fs-5">
        <h2>Main page</h2>
        <p>You can add information about how much money you saved in a month</p>
      </div>

      <div className="text-center border border-primary border-2 rounded-2 p-4 mb-2 fs-5">
        <h2>Table page</h2>
        <p>
          You can view the created table with your information in different
          currencies, as well as edit and delete unnecessary information
        </p>
      </div>
      <div className="text-center border border-primary border-2 rounded-2 p-4 mb-2 fs-5">
        <h2>Technologies</h2>
        <p>React</p>
        <p>React-router</p>
        <p>Redux Toolkit</p>
        <p>Redux Persister</p>
        <p>React-Bootstrap</p>
        <p>Sass</p>
      </div>

      <div className="fs-3 d-flex gap-5 justify-content-center mb-5">
        <Link
          to={'/developerPage'}
          className="text-decoration-none text-success mr-3"
        >
          Developer page
        </Link>
        <Link to={'/main'} className="text-decoration-none text-success">
          Go to Main
        </Link>
      </div>
    </div>
  );
};

export default Instruction;
