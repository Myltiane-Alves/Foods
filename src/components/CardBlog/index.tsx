
import { Container, Description, Img, Content, Card } from './styles';

import frutas from   '../../assets/Frutas_Legumes.jpeg';
export default function CardBlog() {
  return (
    <>
      <Container>
        <Description>
          <h1>Read Our Blog</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </Description>
        <Card>
          <Content>
            <Img>
              <img src={frutas} alt="Frutas e Legumes" />
            </Img>
            <h2>Quick-start guide<br />
              to nuts and seeds
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Mike_Jackson.png" alt="Mike Jackson" />
              <span>Kevin Ibrahim</span>
            </div>
          </Content>
          <Content>
            <Img>
              <img src={frutas} alt="Frutas e Legumes" />
            </Img>
            <h2>Quick-start guide<br />
              to nuts and seeds
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Mike_Jackson.png" alt="Mike Jackson" />
              <span>Kevin Ibrahim</span>
            </div>
          </Content>
          <Content>
            <Img>
              <img src={frutas} alt="Frutas e Legumes" />
            </Img>
            <h2>Quick-start guide<br />
              to nuts and seeds
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Mike_Jackson.png" alt="Mike Jackson" />
              <span>Kevin Ibrahim</span>
            </div>
          </Content>
        </Card>
      </Container>
    </>
  );
};
