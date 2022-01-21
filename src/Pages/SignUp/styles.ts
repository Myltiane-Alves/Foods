import styled from 'styled-components';
import SignInBackgroundImg from '../../assets/bloco_services.svg';
import { primary, text, title } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 40px 0;
    height: auto;
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    h2 {
      color: ${primary};
      padding-bottom: 1rem;
    }

    button {
      display: flex;
      align-items: center;
     
      justify-content: center;
      height: 3.25rem;
      width: 100%;
      padding: 0px 1rem;
      border-radius: 0.25rem;
      background: #badc58;
      color: #FFF;
      font-size: 1rem;
      transition: filter 0.2s ease 0s;
      border: none;
    }

    > a {
      transition: 0.2s;
      &:hover {
        color: var(--blue);
      }
    }
    .signin {
      text-decoration: none;
      color: ${text};
    }
    .link {
      margin-top: 1rem;
      color: ${text};
      text-decoration: none;
    }
  }

  > a {
    transition: 0.2s;
    &:hover {
      color: var(--blue);
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

export const PersonalData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
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

export const InputMask = styled.input`
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