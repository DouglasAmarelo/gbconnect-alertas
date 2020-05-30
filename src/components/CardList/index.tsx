import React from 'react';
import { Card } from '../Card/style';

import * as S from './style';

import PeopleProps from '../../types/People';

const CardList: React.FC<PeopleProps> = ({ people }) => {
  console.log(people);
  return (
    <S.CardList>
      {people.map(person => (
        <Card key={person.nickName} {...person} />
      ))}
    </S.CardList>
  );
};

export default CardList;
