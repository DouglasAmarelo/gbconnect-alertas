import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as S from './Schedule.style';

import scale from '../../data/scale';

type paramsProps = {
  nickname: string;
};

const Schedule = () => {
  const { nickname } = useParams<paramsProps>();
  const [dates, setDates] = useState([] as any);

  useEffect(() => {
    const [{ date }] = scale.filter(({ person }) => person === nickname);

    date && setDates(date);
  }, [nickname]);

  return (
    <>
      <S.Header>
        <h1>{nickname}</h1>

        <S.BackContainer>
          <Link to="/">voltar</Link>
        </S.BackContainer>
      </S.Header>

      <S.Container>
        <S.DateContainer>
          {dates && dates.map((date: string) => <p key={date}>{date}</p>)}
        </S.DateContainer>
      </S.Container>
    </>
  );
};

export default Schedule;
