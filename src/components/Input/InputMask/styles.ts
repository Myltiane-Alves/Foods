import styled, { css } from 'styled-components';
import { text } from '../../../styles/theme'

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 0.25rem;
  height: 3.25rem;
  color: ${text};
  border: 2px solid #1d164d;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    width: 100%;
    height: 3rem;
    background: none;
    border: none;
   // border: 2px solid transparent;

    /* Chrome, Safari, Edge, Opera */
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

