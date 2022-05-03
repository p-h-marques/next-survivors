import styled from 'styled-components';

export const FilterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 40px;

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
  }
`;
