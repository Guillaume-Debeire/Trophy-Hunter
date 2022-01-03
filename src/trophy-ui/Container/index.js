import React from 'react';

import './style.scss';

const OptionContainer = (props) => (
    <div className='option-container'>
        {props.children}
    </div>
)

export default OptionContainer;