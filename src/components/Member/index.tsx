import { Container,  Button } from "./styles";
import { Link } from "react-router-dom";

export default function  Member ()  {
    return (
        <>
            <Container>
               
                <div className="col">
                    <h1>
                        Join our membership <br />
                        to get a special offer
                    </h1>
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                        />
        
                        <Button type="submit">
                            <Link className="link" to="signin">JOIN</Link>
                        </Button>
                    </form>
                </div>
                
            </Container>
        
        </>
    )
}

