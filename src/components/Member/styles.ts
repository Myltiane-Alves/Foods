import styled from 'styled-components';
import { text, title } from '../../styles/theme';
import bgImg from '../../assets/bloco_final_image.svg';

export const Container = styled.header`
  flex-direction: column;
  display: flex; ;
  background: url(${bgImg}) no-repeat top right;
  background-size: 350px;
  padding-bottom: 8rem;
  @media (min-width: 414px) {
   
    
  }
  .col {
    padding-top: 21rem;
    flex-direction: column;
    display: flex;
    h1 {
      font-size: 2rem;
      text-align: center;
      line-height: 2.5rem;
      font-family: Montserrat;
      font-weight: bold;
      color: ${title};
    }
    form {  
      display: flex;
      align-items: center;
      justify-content: space-around;
      input {
        width: 70%;
        height: 40px;
        border: solid 1px #707070;
        border-radius: 5px;
      
        color: ${text};
        font-size: 16px;
        &:focus {
          border-color: #707070;
        }
      }
      input::placeholder {
        color: #9E9BAF;
        padding-left: 0.9rem;
      }
    }
  }
 
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-size: 37%;  
    .col {
      padding-top: 10rem;
      h1 {
        margin-right: 6rem;
      }
      form {
        input {
          width: 344px;
          margin-left: 5rem;
        }
      }
    }
  } 

  @media (min-width: 768px) and (max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr;  
   .col {
    padding-top: 3rem;
    h1 {
      margin-left: 1rem;
    }
    form {     
      margin-left: 2rem;
    }
   }
  } 
  @media (min-width: 1500px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background:  #BADC58;
  box-shadow:  0 0.1rem 1.5rem rgb(186, 220, 88);
  cursor: pointer;
  .link {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 1286px) {
    margin-right: 2rem;
  }  

`;
