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

  const YTD_Person = scale.filter(({ date }) => date.includes(YESTERDAY))[0];
  const TDY_Person = scale.filter(({ date }) => date.includes(TODAY))[0];
  const TMW_Person = scale.filter(({ date }) => date.includes(TOMORROW))[0];

  return (
    <S.CardList>
      <>
        {YTD_Person && (
          <Card
            date={YESTERDAY}
            type="YESTERDAY"
            {...people[YTD_Person.person]}
          />
        )}

        {TDY_Person && (
          <Card date={TODAY} type="TODAY" {...people[TDY_Person.person]} />
        )}

        {TMW_Person && (
          <Card
            date={TOMORROW}
            type="TOMORROW"
            {...people[TMW_Person.person]}
          />
        )}
      </>
    </S.CardList>
  );
};

export default CardList;
