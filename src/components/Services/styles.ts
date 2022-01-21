import styled from 'styled-components';

import bgImg from '../../assets/bloco_services.svg';
import { text, title } from '../../styles/theme';

export const Container = styled.section`
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;

  background: url(${bgImg}) no-repeat top left;
  background-size: 460px;
  background: top 1px;
  @media (min-width: 414px)  {
   
    padding-bottom: 10rem;
  } 
  @media (min-width: 768px) and (max-width: 1024px){
    background-size: 60%; 
  }

  @media (min-width: 1280px)  {
    background-size: 770px;
    background-position: top left;  
    padding-bottom: 0rem;
    margin-bottom: 0px;
  }

  @media (min-width: 1920px)  {
    background-size: 50%;
  }

  @media (min-width: 1500px) {
    background-size: 50%;
    padding-bottom: 6rem;
    margin-bottom: 0;
  }
`;


export const Content = styled.div`
  flex-direction: column;
  display: flex;  
  align-items: center;
  background-color: transparent;
  @media (min-width: 768px) and (max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 1280px) {
    padding: 3rem 2rem 6rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Description = styled.div`
  flex-direction: column;
  display: flex;
  padding: 1rem;
  margin-top: 27rem;
  background-color: transparent;
  @media (min-width: 1280px) {
    margin: 5rem 8.75rem 2.5rem 0;   
   
    p {
      color: white;
    }
    button {
      margin-right: auto;
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    font-family: Montserrat;
    line-height: 2.68rem;
    margin-bottom: 2rem;
    color: ${title};
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${text};
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    margin-top: 0;
    margin-left: 4rem;
    margin-top: -2rem;
    display: flex;
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 1500px) {
    h1 {
      font-size: 3rem;
    }
  }
`;
