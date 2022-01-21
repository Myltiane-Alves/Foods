
import { Link } from 'react-router-dom';
import { BTNSee } from '../../styles/util';
import { Container, Img, Title, Content, ContentCard, Description } from './styles';



export default function CardMenu() {
  return (
    <>
      <Container>
          <Title>
            <h1>Our Best Recipes</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </Title>
        <Content>
          <ContentCard>  
              <Img>
                <img src="/img/comida_1.svg" alt="Brococli salada" />
              </Img>
            <Description>    
              <span>
                Broccoli Salad <br/>
                with Bacon
              </span>
              <BTNSee>
                <Link className="link" to="/">See Recipe</Link>
              </BTNSee>
            </Description>
          </ContentCard>
          <ContentCard>  
              <Img>
                <img src="/img/comida_2.svg" alt=" Hamburger" />
              </Img>
            <Description>    
              <span>Classic Beef <br/> Burgers</span>
              <BTNSee>
                <Link className="link" to="/">See Recipe</Link>
              </BTNSee>
            </Description>
          </ContentCard>
          <ContentCard>  
              <Img>
                <img src="/img/comida_3.svg" alt=" salada" />
              </Img>
            <Description>    
              <span>Classic Potato <br/>Salad</span>
              <BTNSee>
                <Link className="link" to="/">See Recipe</Link>
              </BTNSee>
            </Description>
          </ContentCard>
          <ContentCard>  
              <Img>
                <img src="/img/comida_4.svg" alt="Cherry Cobbler" />
              </Img>
            <Description>    
              <span>
                Cherry Cobbler<br/>
                on the Grill
              </span>
              <BTNSee>
                <Link className="link" to="/">See Recipe</Link>
              </BTNSee>
            </Description>
          </ContentCard>
         
        </Content>

      </Container>

    </>
  );
};


