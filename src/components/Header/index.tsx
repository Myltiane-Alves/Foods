import { Container,  Button } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';
import Nav from "../Nav";


export default function  Header ()  {
    return (
        <>
            <Container>
                <Nav />
                <div className="col">
                    <h1>
                        Ready for <br />
                        Trying a new
                        <br /> recipe?
                    </h1>
                    <form>
                        <input
                            type="text"
                            name="recipe"
                            placeholder="Search healthy recipes"
                        />
                       
                        <Button className="search" type="button" name="search" >
                            <AiOutlineSearch color="white" size="24" />                 
                        </Button>
                    </form>
                </div>
            </Container>
           
        </>
    )
}

