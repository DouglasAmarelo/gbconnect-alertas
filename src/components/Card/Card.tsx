import React from 'react';
import moment from 'moment';

import * as S from './Card.styled';

import PersonProps from '../../types/Person';

type CardType = {
  type?: 'YESTERDAY' | 'TODAY' | 'TOMORROW' | false;
};

type CardProps = PersonProps & {
  date?: string;
  type?: CardType | any;
};

const Card: React.FC<CardProps> = ({ name, nickName, photo, date, type }) => {
  const formatedDate = moment(date).format('DD/MM');

  return (
    <S.Card type={type}>
      <header>
        <S.Date dateTime={date}>{formatedDate}</S.Date>
        <small>{name}</small>
        <S.Title>{nickName}</S.Title>
      </header>

      <S.ImageContainer>
        <img src={`/images/${photo}`} alt={nickName} />
      </S.ImageContainer>
    </S.Card>
  );
};

export default Card;
