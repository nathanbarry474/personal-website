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

