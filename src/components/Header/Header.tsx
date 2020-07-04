import React from 'react';

import { askForNotificationPermissions } from '../../push-notification';

import * as S from './Header.style';

const Header: React.FC = () => (
  <S.Header>
    <S.HeaderTitle>Responsável de hoje:</S.HeaderTitle>
    <button onClick={askForNotificationPermissions}>
      Quero receber notificações
    </button>
  </S.Header>
);

export default Header;
