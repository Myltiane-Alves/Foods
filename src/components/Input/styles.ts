import styled, { css } from 'styled-components';
import { text } from '../../styles/theme';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 0.25rem;
  height: 3.25rem;
  color: ${text};
  border: 1px solid #1d164d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

 
  input {
    height: 2.5rem;
    border: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;

