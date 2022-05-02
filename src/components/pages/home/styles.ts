import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const MainStyles = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 60px;

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
