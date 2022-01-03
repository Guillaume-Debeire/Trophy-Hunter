import React from 'react';
import Container from 'src/trophy-ui/Container'
import Title from 'src/trophy-ui/Title'

import './style.scss';

const Trophies = () => (
    <div className='trophies'>
        <Container>
            <Title title='Trophies' />
        </Container>
    </div>
)

export default Trophies;