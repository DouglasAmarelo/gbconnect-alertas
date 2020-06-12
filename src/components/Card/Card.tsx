import React from 'react';
import moment from 'moment';

import * as S from './Card.styled';

import PersonProps from '../../types/Person';

type CardProps = PersonProps & {
  date?: string;
  yesterday?: boolean;
  today?: boolean;
  tomorrow?: boolean;
};

const Card: React.FC<CardProps> = ({
  name,
  nickName,
  photo,
  date,
  ...orderedDays
}) => {
  const formatedDate = moment(date).format('DD/MM');

  return (
    <S.Card {...orderedDays}>
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
