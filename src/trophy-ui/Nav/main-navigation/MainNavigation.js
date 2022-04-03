import React, { useEffect, useRef, createRef, useState } from 'react';

import './style.scss';

const MainNavigation = ({ navItems }) => {
  const [isSelected, setIsSelected] = useState(null);

  const refs = useRef([]);
  refs.current = navItems.map((navItem, i) => refs.current[i] ?? createRef());

  console.log(refs.current[0][0]);

  return (
    <div className="navigation">
      <ul className="navigation-list">
        {navItems.map((navItem, index) => {
          return (
            <li key={navItem.label} ref={refs.current[index]}>
              {navItem.label}
            </li>
          );
        })}
        <div
          className="navigation-list-background"
          style={{ left: `${isSelected}`, width: `${isSelected == null ? '0' : '5rem'}` }}></div>
      </ul>
    </div>
  );
};

export default MainNavigation;
