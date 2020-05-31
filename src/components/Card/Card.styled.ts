import styled from '@emotion/styled';

export const Card = styled.article`
  align-items: center;
  background: var(--primaryTextColor);
  border-radius: 4px;
  color: var(--secondaryTextColor);
  display: flex;
  flex: 1;
  margin: 0.5em;
  max-width: 350px;
  padding: 30px;
  transition: box-shadow 0.2s, opacity 0.3s, transform 0.3s;

  @media all and (min-width: 640px) {
    flex-direction: column;
  }

  &:not(.active) {
    box-shadow: none;
    opacity: 0.3;
    transform: scale(0.8);
  }

  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  &:hover,
  &.active {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
  }

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  small {
    display: block;
    font-size: min(12px, 3vw);
    margin: 0.5em 0;
  }
`;

export const Date = styled.time`
  font-size: min(65px, 8vw);
  font-weight: 900;
`;

export const Title = styled.h2`
  font-size: min(24px, 5vw);
  font-weight: 500;
  margin: 0;
`;

const imageSize = '240px';

export const ImageContainer = styled.div`
  border-radius: ${imageSize};
  height: auto;
  max-height: ${imageSize};
  max-width: ${imageSize};
  min-height: calc((${imageSize}) / 3);
  min-width: calc((${imageSize}) / 3);
  order: -1;
  overflow: hidden;
  width: 100%;

  @media all and (min-width: 640px) {
    margin-bottom: 20px;
  }

  @media all and (max-width: 640px) {
    margin-right: 20px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
