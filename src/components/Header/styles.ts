import styled from 'styled-components';
import { text, title } from '../../styles/theme';
import bgImg from '../../assets/Illustration.svg';

export const Container = styled.header`
  flex-direction: column;
  background: url(${bgImg}) no-repeat top right;
  background-size: 100px;

 
  @media (max-width: 1920px) {
    background-size: 63%;
    padding-bottom: 5rem;
  }

  .col {
    flex-direction: column;  
    margin-bottom: 2rem; 
    h1 {
      font-size: 1.3rem;
      font-weight: bold;
      font-family: Montserrat;
      margin-left: 1rem;
      line-height: 1.9rem;
      color: ${title};
      
    }
    form {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 2rem;
      input {
        width: 70%;
        height: 40px;
        border: solid 1px #2D3561;
        border-radius: 5px;
     
        color: ${text};
        font-size: 16px;
        &:focus {
          border-color: #707070;
        }
      }
    }
    input::placeholder {
      color: #B4B4B4;
      padding-left: 0.9rem;
    }
    
  }
  .img {

    img {
      height: 355px;
      width: 100%;
    }
  }

  @media (min-width: 414px) {
    flex-direction: column;
    display: flex;
    .col {
      form {
        margin-top: 4rem;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    background-size: 50%;
    .col {
      h1 {
        font-size: 2rem;
      }
      form {
        width: 50%;
      }
    }
  } 
  @media (min-width: 1280px) {
    background-size: 55.2%;
    display: grid;
    grid-template-columns: 1fr ;
    .col {
      margin-bottom: 10rem;
      h1 {
        margin-left: 8rem;   
        font-size: 3rem;
        line-height: 3rem;
      }
      form {
        justify-content: unset;
        margin-left: 8rem;      
        input {
          margin-right: 2rem;
          width: 21.438rem;
        }

      }
    }
  }
`;

export const Button = styled.button`
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background:  #BADC58;
  
  cursor: pointer;
  .link {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }
`;
