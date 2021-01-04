import styled from '@emotion/styled';

export const PepopleTitle = styled.h2`
  font-family: var(--secondaryFontFamily);
  font-size: min(22px, 8vw);
  text-align: center;

  @media all and (max-width: 640px) {
    margin-top: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    border: 1px solid var(--primaryTextColor);
    font-family: var(--primaryFontFamily);
    font-size: min(20px, 5vw);
    margin: 0.2em;
    text-align: center;

    @media all and (min-width: 640px) {
      min-width: 110px;
    }

    a {
      color: var(--primaryTextColor);
      display: block;
      height: 100%;
      padding: 0.5em;
      text-decoration: none;
    }

    &:hover {
      background: var(--primaryTextColor);

      &,
      a {
        color: var(--secondaryTextColor);
      }
    }
  }
`;
