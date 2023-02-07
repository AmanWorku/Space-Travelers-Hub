import React from 'react';
import PropTypes from 'prop-types';

const Dragon = (props) => {
  const { name, description, image } = props;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="bd-placeholder-img img-fluid rounded-start" width="100%" height="262" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button type="button" className="btn btn-primary my-5">Reserve Dragon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dragon;
