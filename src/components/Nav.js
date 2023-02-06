import React from 'react';
import NavItem from './NavItem';

const routes = [
  {
    route: '/',
    text: 'rockets',
  },
  {
    route: '/missions',
    text: 'missions',
  },
  {
    route: '/dragons',
    text: 'dragons',
  },
  {
    route: '/profile',
    text: 'my profile',
  },
];

export default function Nav() {
  return (
    <div className="nav--bar">
      <h3>Space travelers Hub</h3>
      <ul>
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
