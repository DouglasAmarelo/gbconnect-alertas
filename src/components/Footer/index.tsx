import React from 'react';

import * as S from './style';

const Footer: React.FC = () => (
  <footer>
    <S.FooterText>
      Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      by{' '}
      <a
        href="https://douglasamarelo.com/"
        title="@DouglasAmarelo"
        target="_blank"
        rel="noopener noreferrer"
      >
        @DouglasAmarelo
      </a>
    </S.FooterText>
  </footer>
);

export default Footer;
