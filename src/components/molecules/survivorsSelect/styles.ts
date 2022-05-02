import styled from 'styled-components';

export const SelectStyles = styled.div`
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
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.background};

    &__option {
      white-space: nowrap;
      padding: 8px 16px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.background_hover};
      }
    }
  }
`;
