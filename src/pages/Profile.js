import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rocketsReducer);
  const renderReserved = (rocketsInfo) => rocketsInfo.map((rocket) => {
    if (rocket.reserved === true) {
      return <li key={rocket.id} className="list-group-item">{rocket.name}</li>;
    }
    return null;
  });

  return (
    <div>
      <div className="container row col-6">
        <h3>My Rockets</h3>
        <ul className="list-group">{renderReserved(rockets)}</ul>
      </div>
    </div>
  );
}

export default Profile;
