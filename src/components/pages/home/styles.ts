import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export const MainStyles = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 60px;
`;

export const FilterStyles = styled.div`
  display: flex;
  column-gap: 40px;
  justify-content: center;
  align-items: flex-start;

  input {
    width: 280px;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.medium};
    border-left: none;
    font-size: 16px;
    line-height: 16px;
    padding: 0px 8px 8px;
    color: ${({ theme }) => theme.colors.light};

    &:hover {
      &::placeholder {
        color: ${({ theme }) => theme.colors.light};
      }
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.light};
    }
  }

  div.selector {
    position: relative;
    width: 150px;
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding-bottom: 11px;
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.medium};

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.medium};
    }

    div.dropdown {
      position: absolute;
      top: 30px;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.24);

      &__option {
        white-space: nowrap;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.background_hover};
        }
      }
    }
  }
`;
