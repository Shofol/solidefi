import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/Utilites/Navbar';
import Footer from './components/Footer';
import Vote from './pages/vote';
import NFT from './pages/nft';

function App() {
  return (
    <Router>
      <header >
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/vote">
          <Vote />
        </Route>
        <Route path="/nft">
          <NFT />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
