import React from 'react';

import * as S from './style';

import PersonProps from '../../types/Person';

const Card: React.FC<PersonProps> = ({ name, nickName, photo }) => {
  return (
    <S.Card>
      <header>
        <S.Date dateTime="30-05-2020">30/05</S.Date>
        <S.Title>{name} - LOREM IPSUM DOLOR</S.Title>
        <small>{nickName} - Lorem</small>
      </header>

      <S.ImageContainer>
        <img src={`/images/${photo}`} alt={nickName} />
      </S.ImageContainer>
    </S.Card>
  );
};

export default Card;
