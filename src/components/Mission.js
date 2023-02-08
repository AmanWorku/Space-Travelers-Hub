import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/missions/missions';

const Mission = (props) => {
  const { id, name, description } = props;
  const dispatch = useDispatch();
  const handleJoining = () => {
    dispatch(joinMission(id));
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {description}
        </td>
        <td className="button-status"><button type="button" onClick={handleJoining} className="status">NOT A MEMBER</button></td>
        <td className="button-join"><button type="button" className="join">Join Mission</button></td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
