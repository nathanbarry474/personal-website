import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home.page'
import { BookList } from './pages/book-list.page'
import { NavigationBar } from './components/navbar.component'


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/book-list' component={BookList} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;

/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="#ffffff"
    fill-opacity="1"
    d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,133.3C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
  ></path>
</svg>; */
