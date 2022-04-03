import React, { useEffect, useRef, createRef, useState } from 'react'

import './style.scss';

// import {navigationItems} from "../../../data/navigation"

// console.log(navigationItems)

const MainNavigation = ({navItems}) => {
  
  const [isSelected, setIsSelected] = useState(null);

  const refs = useRef([]);
  refs.current = navItems.map((navItem, i) => refs.current[i] ?? createRef());

  console.log(refs.current[0][0])

  return (
    <div className='navigation'>
      <ul className='navigation-list'>
        {navItems.map((navItem, index) => {
          // {console.log(navItem)}
          return(
            <li
              key={navItem.label}
              ref={refs.current[index]} 
            >
              {navItem.label}
            </li>)
        })}
        <div className='navigation-list-background' 
          style={{ left:`${isSelected}`, width: `${isSelected == null ? "0" : "5rem"}`}}
        ></div>
      </ul>
    </div>

    // <div className='navigation'>
    //   <ul className='navigation-list'>
    //     <li
    //       className={`navigation-list-${isSelected == "0rem" ? "selected" : "unselected"}`}
    //       onMouseEnter={() => {
    //         setIsSelected("0rem")
            
    //       }}
    //       onMouseLeave={() => setIsSelected(null)}
    //       >
    //       Object
    //     </li>
    //     <li
    //       className={`navigation-list-${isSelected == "5rem" ? "selected" : "unselected"}`}
    //       onMouseEnter={() => setIsSelected("5rem")}
    //       onMouseLeave={() => setIsSelected(null)}
    //     >
    //       Object
    //     </li>
    //     <li
    //       className={`navigation-list-${isSelected == "10rem" ? "selected" : "unselected"}`}
    //       onMouseEnter={() => setIsSelected("10rem")}
    //       onMouseLeave={() => setIsSelected(null)}
    //       >
    //       Object
    //     </li>
    //     <li
    //       className={`navigation-list-${isSelected == "15rem" ? "selected" : "unselected"}`}
    //       onMouseEnter={() => setIsSelected("15rem")}
    //       onMouseLeave={() => setIsSelected(null)}
    //     >
    //       Object
    //     </li>
    //     <div className='navigation-list-background' 
    //       style={{ left:`${isSelected}`, width: `${isSelected == null ? "0" : "5rem"}`}}
    //     ></div>
    //   </ul>
    // </div>
  )
}

export default MainNavigation;