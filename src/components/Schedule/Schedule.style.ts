import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: auto;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  max-width: 620px;
  padding: 0.5em;
  width: 100%;
`;

export const BackContainer = styled.span`
  border: 1px solid var(--primaryTextColor);
  display: inline-block;
  font-family: var(--primaryFontFamily);
  font-size: min(20px, 5vw);
  margin: 0.2em;
  text-align: center;

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
`;

export const DateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
  text-align: center;
  width: 100%;

  p {
    border: 1px solid var(--primaryTextColor);
    flex: 1 0 calc(50% - 1em);
    font-size: min(22px, 4vw);
    letter-spacing: 5px;
    margin: 0.5em;
    padding: 1.5em 1em;
    text-align: center;
  }
`;
