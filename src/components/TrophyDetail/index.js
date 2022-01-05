import React from 'react';

import Container from 'src/trophy-ui/Container';
import Title from 'src/trophy-ui/Title';

import './style.scss';

const TrophyDetail = () => {
  const style = {
    color: 'white'
  };
  return (
    <div className="trophydetail">
      <Container>
        <Title title="Un coup de main" style={style} />
      </Container>
    </div>
  );
};

export default TrophyDetail;
