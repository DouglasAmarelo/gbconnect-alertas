import React from 'react';
import moment from 'moment';

import { Card } from '../Card';

import * as S from './CardList.style';

import PeopleProps from '../../types/People';

import scale from '../../data/scale';

const CardList = ({ people }: PeopleProps) => {
  const FORMAT_DATE = 'YYYY/MM/DD';
  const TODAY = moment().format(FORMAT_DATE);
  const YESTERDAY = moment(TODAY).subtract('day', 1).format(FORMAT_DATE);
  const TOMORROW = moment(TODAY).add('day', 1).format(FORMAT_DATE);

  const filteredScale = scale.filter(
    ({ date }) =>
      date.includes(YESTERDAY) ||
      date.includes(TODAY) ||
      date.includes(TOMORROW)
  );

  const findDate = (date: string) =>
    date === YESTERDAY || date === TODAY || date === TOMORROW;

  return (
    <S.CardList>
      {filteredScale.map(({ person, date }) => {
        return (
          <Card
            key={person}
            date={date.find(findDate)}
            type={
              (date.includes(YESTERDAY) && 'YESTERDAY') ||
              (date.includes(TODAY) && 'TODAY') ||
              (date.includes(TOMORROW) && 'TOMORROW')
            }
            {...people[person]}
          />
        );
      })}
    </S.CardList>
  );
};

export default CardList;
