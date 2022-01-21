import styled from 'styled-components';
import { primary } from '../../styles/theme';

export const Container = styled.header`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 6.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  .logo { 
    font-size: 2rem;
    line-height: 2.68rem;
    font-weight: bold;
    text-decoration: none;
    color: ${primary};
  }

  button.mobileMenu {
    display: none;
   
  }

  @media (max-width: 720px) {
    a.logo {
      color: var(--green);
      font-family: var(--text-title);
      font-size: 1.1rem;
      line-height: 2rem;
      font-weight: bold;
    }

    button.mobileMenu {
      display: flex;
      padding: 0.5rem;
      font-size: 2rem;
      color: var(--black);
      background: transparent;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 500px) {
  
    a.logo {
      color: ${primary};
    }

    button.mobileMenu {
      background-color: ${primary};
      border: none;
      border-radius: 7px;
      color: #FFFFFF;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {
        line-height: 1.3rem;
        list-style: none;
        a {
          font-size: 1.3rem;
          font-weight: bold;
          color: #FFFFFF;
          text-decoration: none;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }

        button {
          font-weight: bold;
          padding: 1rem 1.87rem;
          color: #FFFFFF;
          background-color: ${primary};
          border-radius: 7px;
          border: none;
          line-height: 1.3rem;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
