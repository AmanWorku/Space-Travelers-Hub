import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };

  const reserveButton = (reserveStatus) => {
    if (!reserveStatus) {
      return <button type="button" onClick={handleReserve} className="btn btn-primary my-5">Reserve Rocket</button>;
    }
    return <button type="button" onClick={handleCancel} className="btn btn-outline-danger my-5">Cancel Reservation</button>;
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
            {reserveButton(reserved)}
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
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
