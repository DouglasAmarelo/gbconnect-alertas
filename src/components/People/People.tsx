import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './People.style';

import PeopleProps from '../../types/People';

const People: React.FC<PeopleProps> = ({ people }) => (
  <section>
    {people && (
      <>
        <S.PepopleTitle>Ordem da escala dos responsáveis:</S.PepopleTitle>
        <S.List>
          {Object.values(people).map(({ nickName }) => (
            <li key={nickName}>
              <Link to={nickName}>{nickName}</Link>
            </li>
          ))}
        </S.List>
      </>
    )}
  </section>
);

export default People;
