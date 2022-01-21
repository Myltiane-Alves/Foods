import styled from 'styled-components';
import { text, title } from '../../styles/theme';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  background-color: #FAFAFC;
  padding-bottom: 5rem;
  
  @media (min-width: 1280px) {
    padding-bottom: 5rem;
  }
  @media (min-width: 414px)  {
    padding: 0;
  } 
`;

export const Description = styled.div`
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    font-family: Montserrat;
    line-height: 4rem;
    color: ${title};
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: ${text};
    line-height: 1rem;
  }
`;

export const Img = styled.div` 
  img {
   width: 300px;
   border-radius: 0.438rem;
  } 
  @media (min-width: 768px) and (max-width: 1024px){
    img {
      width: 100%;
    } 
  }  
`;

export const Card = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFC;
  
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding-bottom: 3rem;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr; 
  } 
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  border-radius: 0.438rem;
  box-shadow:  0 0.938rem 1.25rem rgba(29, 22, 77, 0.18 );
  margin-bottom: 1.5rem;
  width: 300px;
  height: 28.125rem;
  background-color: #FFFFFF;
  margin-left: 1.8rem;
  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: Montserrat;
    color: ${title};
    margin-left: 1.563rem;
  }
  .figure {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    margin: 0;
    padding: 0;
    height: 5rem;
    width: 100%;
    .profile {
      overflow: hidden;
      height: 3.25rem;
      border-radius: 50%;
      margin-left: 1.563rem;
      
      img {
        object-fit: cover;
        width: 100%;
        height: auto;     
      }
    }
    span {
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: 0.563rem;
      color: ${text};
    }
  }

  @media (min-width: 768px) and (max-width: 1024px){
    width: 60%;
    margin-left: 4rem;
  } 
`;

