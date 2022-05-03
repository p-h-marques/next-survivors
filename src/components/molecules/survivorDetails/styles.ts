import styled from 'styled-components';

export const SurvivorDetailsStyles = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0px 16px;
  .modal {
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
