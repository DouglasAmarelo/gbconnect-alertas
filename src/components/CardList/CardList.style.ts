import styled from '@emotion/styled';

export const CardList = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;

  @media all and (max-width: 640px) {
    flex-direction: column;
  }
`;
