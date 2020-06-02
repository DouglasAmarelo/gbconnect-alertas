import styled from '@emotion/styled';

export const Footer = styled.footer`
  margin-top: 1em;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 12px;

  a {
    color: var(--primaryTextColor);

    &:hover {
      text-decoration: none;
    }
  }
`;
