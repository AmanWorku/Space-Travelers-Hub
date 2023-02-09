import React from 'react';
import NavItem from './NavItem';
import planet from '../assets/planet.png';

const routes = [
  {
    route: '/',
    text: 'Rockets',
  },
  {
    route: '/missions',
    text: 'Missions',
  },
  {
    route: '/dragons',
    text: 'Dragons',
  },
  {
    route: '/profile',
    text: '| My Profile',
  },
];

export default function Nav() {
  return (
    <div className="nav--bar">
      <img src={planet} alt="planet" id="planet-icon" />
      <h2 id="nav-header">Space travelers&apos; Hub</h2>
      <ul className="nav--list">
        {
            routes.map((route) => (
              <li key={route.text}>
                <NavItem route={route.route} text={route.text} />
              </li>
            ))
          }
      </ul>
    </div>
  );
}
