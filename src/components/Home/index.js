import React from 'react';
import Title from 'src/trophy-ui/Title'

const Home = () => {
    const style = {
        color: '#500CF3',
    }
    return (
        <div className='home'>
            <Title title='Home' style={style} />
        </div>
    )
}

export default Home;