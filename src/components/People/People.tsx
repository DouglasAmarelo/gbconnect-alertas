import React from 'react';

import * as S from './People.style';

import PeopleProps from '../../types/People';

const People: React.FC<PeopleProps> = ({ people }) => (
  <section>
    {people && (
      <>
        <S.PepopleTitle>Ordem da escala dos responsáveis:</S.PepopleTitle>
        <S.List>
          {Object.values(people).map(({ nickName }) => (
            <li key={nickName}>{nickName}</li>
          ))}
        </S.List>
      </>
    )}
  </section>
);

export default People;
