import styled from '@emotion/styled';

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media all and (min-width: 640px) {
    height: 80px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: var(--secondaryFontFamily);
  font-size: min(30px, 6vw);
  margin: 0;
`;
