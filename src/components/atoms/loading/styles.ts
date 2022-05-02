import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const LoadingStyles = styled.div`
  img {
    animation: ${rotation} 2s infinite linear;
  }
`;
