import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import DebitsList from './components/DebitsList';
import CreditsList from './components/CreditsList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      credits: [],
      debits: []
    }
  }

  getDebits() {
    fetch('http://localhost:4000/debits')
      .then(response => response.json())
      .then(data => this.setState({ debits: data }))
  }

  getCredits() {
    fetch('http://localhost:4000/credits')
      .then(response => response.json())
      .then(data => this.setState({ credits: data }));
  }

  componentDidMount () {
    this.getDebits()
    this.getCredits()
  }

  render() {

    const accountBalance = 14568.27

    const currentUser = {
      userName: 'bob_boblaw',
      memberSince: '08/23/99'
    }

    const HomeComponent = () => (<Home accountBalance={accountBalance} />)
    const UserProfileComponent = () => (<UserProfile {...currentUser} />)
    const DebitsListComponent = () => (<DebitsList debits={this.state.debits} />)
    const CreditsListComponent = () => (<CreditsList credits={this.state.credits} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/profile" render={UserProfileComponent}/>
          <Route exact path="/debits" render={DebitsListComponent}/>
          <Route exact path="/credits" render={CreditsListComponent}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
