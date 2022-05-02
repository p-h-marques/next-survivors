import styled from 'styled-components';

export const InputStyles = styled.input`
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
`;
