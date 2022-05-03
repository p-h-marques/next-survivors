import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 0px 40px;
`;

export const MainStyles = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 60px;
  padding: 0px 40px;

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
