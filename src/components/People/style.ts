import styled from '@emotion/styled';

export const PepopleTitle = styled.h2`
  font-family: var(--secondaryFontFamily);
  text-align: center;
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
    font-size: 22px;
    padding: 0.5em;
    margin: 0.5em;
    min-width: 110px;
    text-align: center;

    &:hover {
      background: var(--primaryTextColor);
      color: var(--secondaryTextColor);
    }
  }
`;
