import styled from '@emotion/styled';
import { css } from '@emotion/core';

type CardProps = {
  yesterday?: boolean;
  today?: boolean;
  tomorrow?: boolean;
};

export const Card = styled.article<CardProps>`
  align-items: center;
  background: var(--primaryTextColor);
  border-radius: 4px;
  box-shadow: none;
  color: var(--secondaryTextColor);
  display: flex;
  flex: 1;
  margin: 1em;
  max-width: 350px;
  opacity: 0.3;
  padding: 0.7em;
  position: relative;
  transform: scale(0.8);
  transition: box-shadow 0.2s, opacity 0.3s, transform 0.3s;

  @media all and (min-width: 640px) {
    flex-direction: column;
    margin: 0.5em;
    padding: 1.5em;
  }

  @media all and (max-width: 640px) {
    width: 100%;
  }

  ${({ yesterday }) =>
    yesterday &&
    css`
      order: 1;

      &:before {
        content: 'Ontem';
      }
    `}

  ${({ tomorrow }) =>
    tomorrow &&
    css`
      order: 3;

      &:before {
        content: 'Amanhã';
      }
    `}

  ${({ today }) =>
    today &&
    css`
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
      opacity: 1;
      order: 2;
      position: relative;
      transform: scale(1);
      z-index: 10;

      &:before {
        content: 'Hoje';
      }
    `}

  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  &:before {
    color: var(--primaryTextColor);
    font-size: 12px;
    left: 50%;
    letter-spacing: 2px;
    position: absolute;
    text-transform: uppercase;
    top: -22px;
    transform: translateX(-50%);
  }

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media all and (max-width: 640px) {
      margin: auto;
    }
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
  font-size: min(24px, 6vw);
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
    margin-right: 0.5em;
    max-height: calc((${imageSize}) / 2);
    max-width: calc((${imageSize}) / 2);
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
