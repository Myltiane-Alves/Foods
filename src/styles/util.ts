import styled, { createGlobalStyle } from "styled-components";
import { primary } from "./theme";

const GlobalStyle = createGlobalStyle`
  
`;

export const BTN = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.375rem;
  width: 9.375rem;
  border-radius: 0.25rem;
  background: ${primary};
  box-shadow:  0 0.1rem 1.5rem rgb(186, 220, 88);
  border: none;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
export const BTNSee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  height: 3rem;
  width: 8.375rem;
  background: ${primary};
  
  border: none;
  border-radius: 7px;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default GlobalStyle;