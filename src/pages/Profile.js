import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const reservedRockts = useSelector((state) => state.rocketsReducer.filter((rck) => rck.reserved));
  const reservedDragons = useSelector((state) => state.dragonsReducer.filter((dr) => dr.reserved));

  return (
    <div className="profile-section">
      <div className="container row col-6">
        <h3>My Rockets</h3>
        <ul className="list-group">
          {reservedRockts.length ? reservedRockts.map((rocket) => <li key={rocket.id} className="list-group-item">{rocket.name}</li>) : <li className="list-group-item">No Reserved Rockets</li> }
        </ul>
      </div>
      <div className="container row col-6">
        <h3>My Dragons</h3>
        <ul className="list-group">
          {reservedDragons.length ? reservedDragons.map((dragon) => <li key={dragon.id} className="list-group-item">{dragon.name}</li>) : <li className="list-group-item">No Reserved Dragons</li> }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
