import styled from 'styled-components';

export const SurvivorDetailsModalStyles = styled.div`
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

    &__content {
      display: flex;
      column-gap: 16px;
      justify-content: flex-start;
      align-items: stretch;
      padding: 0px 16px;
    }

    &__infos {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      p {
        font-size: 14px;
        line-height: 14px;
      }
    }

    &__nationality {
      height: 14px;
      position: relative;
      display: flex;
      column-gap: 4px;
    }

    &__actions {
      display: flex;
      column-gap: 8px;
      align-items: center;
      justify-content: flex-start;
      height: 32px;
    }

    &__action {
      font-size: 14px;
      line-height: 14px;
      background-color: ${({ theme }) => theme.colors.cured};
      cursor: pointer;
      padding: 8px 16px;
      margin-bottom: 2px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.cured_hover};
      }

      &--cured {
        background-color: ${({ theme }) => theme.colors.danger};

        &:hover {
          background-color: ${({ theme }) => theme.colors.danger_hover};
        }
      }
    }
  }
`;
