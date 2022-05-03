import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.64);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 480px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 22px 16px 48px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    justify-content: center;
    align-items: stretch;

    &__header {
      padding: 0px 16px 8px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.medium};
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      span {
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
`;
