import React from 'react';
import Container from 'src/trophy-ui/Container'
import Title from 'src/trophy-ui/Title'

import './style.scss';

const MyGames = () => {
    const style = {
        color: '#500CF3',
    }
    return (
        <div className='my-games'>
            <Title title='My Games' style={style} />
        </div>
    )
}

export default MyGames;