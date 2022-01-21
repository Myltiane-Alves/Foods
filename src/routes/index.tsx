import { Switch,  Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SigIn from "../Pages/Signin";
import SignUp from "../Pages/SignUp";

const Rota: React.FC = () => (
    <Switch>
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/signin"  component={SigIn} />
            <Route path="/signup"  component={SignUp} />
        </BrowserRouter>
    </Switch>
)

export default Rota;