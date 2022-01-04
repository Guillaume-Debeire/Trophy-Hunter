import React from 'react';

import './style.scss';

const Subtitle = ({ title, style }) => (
    <div className='subtitle'>
        <h1 className='subtitle-text' style={style}>{title}</h1>
    </div>
)

export default Subtitle;