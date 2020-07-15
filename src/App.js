import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BasicLayout from './layouts/BasicLayout';
import NewsDetail from './pages/NewsDetail';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/news/:topicId">
        <BasicLayout>
            <NewsDetail />
        </BasicLayout>
        </Route>
        <Route exact path="/news">
          <BasicLayout>
            <News />
          </BasicLayout>
        </Route>
        <Route exact path="/about">
        <BasicLayout>
          <About />
        </BasicLayout>
        </Route>
        <Route exact path="/">
        <BasicLayout>
          <Home />
        </BasicLayout>
        </Route>
        <Route path="/">
          <h4>404</h4>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
