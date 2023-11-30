import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="d-flex justify-content-center gap-3 fw-bolder">
      <Link to={'/main'} className="text-decoration-none text-success">
        Add more information
      </Link>
      <Link to={'/instruction'} className="text-decoration-none text-success">
        Instruction
      </Link>
      <Link to={'/developerPage'} className="text-decoration-none text-success">
        Developer page
      </Link>
    </div>
  );
};

export default Links;
