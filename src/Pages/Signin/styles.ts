import styled from 'styled-components';

import SignInBackgroundImg from '../../assets/bloco_services.svg';
import { primary, text, title } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  
  a.logo {
    display: flex;
    font-size: 1.5rem;
    font-family: Montserrat;
    font-weight: bold;
    text-decoration: none;
    color: ${primary};
    text-align: center;
   
  }
  h1 {
    font-size: 1.5rem;
    color: ${title};
    font-family: Montserrat;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    width: 35%;
    h2 {
      color: ${title};
      padding-bottom: 1rem;
    }
    input {
        height: 2.5rem;
        border: 1px solid #2D3561;
        border-radius: 0.25rem;
        width: 100%;
        display: flex;
        color: #2D3561;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        
    }
    div {
      & + div {
        margin-top: 1rem;
      }
    }

    button {
        width: 100%;
        margin: 1rem 0 0.5rem 0;
        
        border: none;
        justify-content: center;
        height: 3.25rem;
        padding: 0px 1rem;
        border-radius: 0.25rem;
        background: ${primary};
        color: var(--white);
        font-size: 1rem;
        transition: filter 0.2s ease 0s;
        a {
            color: #FFFFFF;
            font-weight: 600;
        }
    }
    a {
        text-decoration: none;
        color: ${text}
        
    }
    .link {
      margin-top: 1rem;
      color: ${text};
      text-decoration: none;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const Input = styled.input`
  border-radius: 0.25rem;
  height: 3.25rem;
  color: ${title};
  border: 2px solid #1d164d;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`;