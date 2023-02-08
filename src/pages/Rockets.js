import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rocket from '../components/Rocket';
import { retrieveRockets } from '../redux/rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rocketsReducer);
  const renderRockets = (rocketsInfo) => rocketsInfo.map((rckt) => (
    <Rocket
      key={rckt.id}
      id={rckt.id}
      description={rckt.description}
      name={rckt.name}
      image={rckt.image}
      reserved={rckt.reserved}
    />
  ));
  return (
    <div className="container-fluid my-4">{renderRockets(rockets)}</div>
  );
}

export default Rockets;
