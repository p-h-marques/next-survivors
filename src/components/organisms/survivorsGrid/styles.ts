import styled from 'styled-components';

export const SurvivorsStyles = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 16px;

  @media (max-width: 991px) {
    max-width: 720px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    max-width: 540px;
    grid-template-columns: 1fr;
  }
`;
