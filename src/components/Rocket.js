import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image,
  } = props;
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

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
            <button type="button" onClick={handleReserve} className="btn btn-primary my-5">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
