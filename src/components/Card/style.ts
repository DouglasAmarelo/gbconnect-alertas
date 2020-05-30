import styled from '@emotion/styled';

export const Card = styled.article`
  background: var(--primaryTextColor);
  border-radius: 4px;

  color: var(--secondaryTextColor);
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 0;
  align-items: center;
  transition: box-shadow 0.2s, opacity 0.3s, transform 0.3s;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Date = styled.time`
  font-size: 75px;
  font-weight: 900;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 500;
  margin: 0.5em 0 0 0;
`;

const imageSize = '290px';

export const ImageContainer = styled.div`
  border-radius: ${imageSize};
  height: ${imageSize};
  margin-bottom: 20px;
  order: -1;
  overflow: hidden;
  width: ${imageSize};

  img {
    display: block;
    max-width: 100%;
  }
`;
