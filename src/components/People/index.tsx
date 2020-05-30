import React from 'react';

import * as S from './style';

import PeopleProps from '../../types/People';

const People: React.FC<PeopleProps> = ({ people }) => (
  <section>
    {people && (
      <>
        <S.PepopleTitle>Ordem da escala dos responsáveis:</S.PepopleTitle>
        <S.List>
          {people.map(({ nickName }) => (
            <li key={nickName}>{nickName}</li>
          ))}
        </S.List>
      </>
    )}
  </section>
);

export default People;
