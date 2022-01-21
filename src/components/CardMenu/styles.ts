import styled from 'styled-components';
import { text, title } from '../../styles/theme';

export const Container = styled.div`
  flex-direction: column;

  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFC;
  @media (min-width: 414px)  {
    padding: 0;

  } 
  @media (min-width: 1280px) {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  @media (min-width: 1500px) {
    padding-bottom: 20rem;
  }
  @media (min-width: 1920px) {
    padding-bottom: 4rem;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  background-color: #FAFAFC;
 
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 768px) and (max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr ;
  } 
`;

export const Img = styled.div`
  flex-direction: column;
  img {
    height: 267px;
    width: 300px;
    border-radius: 7px; 
  }
  @media (min-width: 1280px) {  
    display: flex;
    margin-right: -11.1rem;
    margin-left: -9rem;
    img {
      width: 548px;
      height: 14.63rem;
    }
  }
`;

export const Description = styled.div`
  flex-direction: column;
  display: flex;
  padding-top: 3rem;
  width: 300px;
  height: 200px;
  border-radius: 7px;
  background-color: #FFFFFF;
  span {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: Montserrat;
    margin-bottom: 1.3rem;
    margin-left: 2rem;
  }
  .link {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: #FFFFFF;
    align-items: center;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 548px;
    height: 14.63rem;
    padding-top: 4rem;
    margin: 0;
    
  }
`;
export const ContentCard = styled.div`
  flex-direction: column;
  box-shadow:  0 15px 20px rgba(29, 22, 77, 0.18 ); 
  border-radius: 7px;
  height: 475px;
  width: 300px;
  margin-bottom: 3rem;
  margin-left: 2rem;
  @media (min-width: 414px) and (max-width: 896px) {
    flex-direction: column;
    display: flex;
    width: 300px;
    height: 31.63rem;
    margin-left: 3rem;
    background-color: #FFFFFF;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-self: center;
    width: 548px;
    height: 14.63rem;
    gap: 2.25rem;
    display: flex;
    margin-bottom: 5rem;
  }

`;

export const Title = styled.div`
  flex-direction: column;
  margin-bottom: 3rem;
  padding-top: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    font-family: Montserrat;
    text-align: center;
    color: ${title}
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: ${text};
  }
`;
