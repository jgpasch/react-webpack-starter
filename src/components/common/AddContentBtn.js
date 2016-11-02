import React from 'react';
import {Link} from 'react-router';

const AddContentBtn = () => {
  return(
    <div className="add-btn">
      <Link to="/create">
        <span></span>
      </Link>
    </div>
  );
};

export default AddContentBtn;
