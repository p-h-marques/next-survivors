import styled from 'styled-components';
import { ISurvivor } from '../../../models';

export const SurvivorCardStyles = styled.div<ISurvivor>`
  padding: 16px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  background-color: ${({ isInfected, theme }) =>
    isInfected ? theme.colors.background_danger : 'unset'};
  cursor: pointer;

  &:hover {
    transform: scale(1.024);
  }

  .infos {
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
    }

    p {
      font-size: 12px;
      line-height: 12px;
    }

    .nationality {
      height: 12px;
      position: relative;
      display: flex;
      column-gap: 4px;
    }
  }

  .infected {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: ${({ theme }) => theme.colors.danger};
    padding: 4px 8px;
    font-size: 12px;
    line-height: 12px;
  }
`;
