import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';
import Home from './components/Home';
import {Navbar, Nav} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/list'><FontAwesomeIcon icon={faList} />List</Nav.Link>
            <Nav.Link as={Link} to='/create'><FontAwesomeIcon icon={faPlus} />Create</Nav.Link>
            <Nav.Link as={Link} to='/search'><FontAwesomeIcon icon={faSearch} />Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch/>
        </Route>
        <Route path="/update/:id" render={props =>(
          <RestaurantUpdate {...props}/>
        )}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
