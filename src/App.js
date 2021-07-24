import React  from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from './Components/Layout/Header/NavBar/Header';
import Footer from './Components/Layout/Footer/Footer'
import MainPage from './Components/Blog/MainPage';
import Details from './Components/Details/Details';
import OurPartners from './Components/OurPartners/OurPartners'
import OurClints from './Components/OurClints/OurClints'
import SysSolutions from './Components/SysSolutions/SysSolutions'
import Services from './Components/Services/Services'
import Products from './Components/Product/Products'
import HomePage from './Home/HomePage'
import Scroll from './Components/Layout/Scroll/Scroll'







function App() {

  
  return (
    <div className="App">
    <Router>
    <Header/>
    <Scroll/>
      <Switch>
        <Route path="/" exact component={HomePage} /> 
        <Route path="/blog" exact  component={MainPage} />
        <Route path="/:locale/blog/:slug" exact component={Details}/>
        <Route path="/our-partners" exact component={OurPartners} />
        <Route path="/our-clients" exact component={OurClints} />
        <Route path="/sys-solutions" exact component={SysSolutions} />
        <Route path="/services" exact component={Services}  />
        <Route path="/products" exact component={Products} />
      </Switch>

    

      <Footer/>
      
      </Router>

      

     
        
      
    </div>
  );
}

export default App;
