import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import categories from 'src/data/categories';

const Nav = () => (
    <div className='nav'>
        <nav className="menu">
            {categories.map((category) => (
                <NavLink
                    className="menu-link"
                    to={category.route}
                    key={category.label}
                >
                    {category.label}
                </NavLink>
            ))}
        </nav>
    </div>
);

export default Nav;