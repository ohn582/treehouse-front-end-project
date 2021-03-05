import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { HowItWorks } from './HowItWorks';
import { Contact } from './Contact';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/HowItWorks" component={HowItWorks} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
