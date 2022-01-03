import React from 'react';

import Container from 'src/trophy-ui/Container';
import Title from 'src/trophy-ui/Title'

import './style.scss'

const ModalSettings = () => {
    const style = {
        color: 'white',
    }
    return (
        <div className='settings-modal'>
            <Container>
                <Title title='Settings' style={style} />
                
            </Container>
        </div>
    )
}

export default ModalSettings;