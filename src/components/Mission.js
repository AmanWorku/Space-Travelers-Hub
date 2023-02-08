import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    id, name, description, isReserved,
  } = props;
  const dispatch = useDispatch();
  const handleJoining = () => {
    dispatch(updateMission(id));
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {description}
        </td>
        <td className="button-status"><button type="button" className="status">{isReserved ? 'Active Member' : 'NOT A MEMBER'}</button></td>
        <td className="button-join"><button type="button" className="join" onClick={handleJoining}>Join Mission</button></td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Mission;
