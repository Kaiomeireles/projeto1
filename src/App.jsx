// App.js
import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" components={Home} />
          <Route path="/produtos" components={Produtos} />
          <Route path="/sobre" components={Sobre} />
          <Route path="/contato" components={Contato} />
          <Route components={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
