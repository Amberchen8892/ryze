import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Router>
    <NavBar />
    <section>
      <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/register' component={Register} /> */}
      <Route path='/login' component={Login} />
      </Switch>
    </section>
    <Footer />
    </Router>
   
   
    
    </>
  );
}

export default App;
