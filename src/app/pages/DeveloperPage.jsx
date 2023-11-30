/* eslint-disable max-len */
import { freelance, projectFuture, skills } from '../constants';

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const DeveloperPage = () => {
  return (
    <div className="container">
      <div className="fs-3 d-flex justify-content-center gap-5 my-4">
        <Link
          className="text-decoration-none text-success fs-3"
          to={'https://nadieinoleh.github.io/Portfolio/'}
        >
          Portfolio
        </Link>
        <Link
          className="text-decoration-none text-success fs-3"
          to={'https://github.com/NadieinOleh'}
        >
          GitHub
        </Link>
      </div>

      <h1 className="mt-3 text-center">Skills</h1>
      <ListGroup className="d-flex flex-row gap-4 mb-3">
        {skills.map(({ id, title }) => (
          <ListGroup.Item className="" key={id} as="li">
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h1 className="mb-3 text-center">Experience</h1>
      <h2 className="mb-3 text-center">Frontend Developer</h2>
      <h3 className="mb-3 text-center">
        Charity Organization "Project Future"
      </h3>

      <ListGroup className="mb-3" as="ol" numbered>
        {projectFuture.map(({ id, title }) => (
          <ListGroup.Item key={id} as="li">
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h1 className="mb-3 text-center">Frontend Developer</h1>
      <h2 className="mb-3 text-center"> Freelance Projects</h2>

      <ListGroup className="mb-3" as="ol" numbered>
        {freelance.map(({ id, title }) => (
          <ListGroup.Item key={id} as="li">
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Link
        className="text-decoration-none text-success fs-3 d-block text-center mb-5"
        to={'/main'}
      >
        Go to Main
      </Link>
    </div>
  );
};

export default DeveloperPage;
