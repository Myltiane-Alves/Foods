import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Rota from './routes';


function App() {
  return (
    <>      
    <BrowserRouter>
      <Switch>
        <Rota />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
