import styled from 'styled-components';

export const ErrorStyles = styled.div`
  padding: 32px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  box-shadow: ${({ theme }) => theme.shadow};

  p {
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
  }
`;
