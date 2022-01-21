import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.1rem;
  
  @media (min-width: 768px) and (max-width: 1024px){
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  } 
  @media (min-width: 1280px) {
    display: flex;   
    > div {
      display: flex;
      width: 100%;
      display: grid;
      grid-template-columns:  1fr 1fr ;
      ul {
        display: flex;
        width: 100%;
        li {
          margin-right: 3rem;
      
          padding: 0;
          width: auto;
        }
      }
    }
  }
  p {
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    color: #9E9BAF;
  }
  ul {
    width: 100%;
    li {
      list-style: none;
      a {
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: #9E9BAF;
      }
    }
  }
`;

