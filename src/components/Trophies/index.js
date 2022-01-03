import React from 'react';
import Container from 'src/trophy-ui/Container'
import Title from 'src/trophy-ui/Title'

import './style.scss';

const Trophies = () => {
    const style = {
        color: '#500CF3',
    }
    return (
        <div className='trophies'>
            <Title title='Trophies' style={style} />
        </div>
    )
}

export default Trophies;