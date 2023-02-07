import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { name, description } = props;
  return (
    <>
      <td>{name}</td>
      <td>
        {description}
      </td>
      <td className="button-status"><button type="button" className="status">NOT A MEMBER</button></td>
      <td className="button-join"><button type="button" className="join">Join Mission</button></td>
    </>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;