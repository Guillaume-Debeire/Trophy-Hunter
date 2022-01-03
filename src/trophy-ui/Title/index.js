import React from 'react';

import './style.scss';

const Title = ({ title, style }) => (
    <div className='title'>
        <h1 className='title-text' style={style}>{title}</h1>
    </div>
)

export default Title;