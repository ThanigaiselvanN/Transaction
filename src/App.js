import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TransactionListPage from './pages/transaction-list-page';
import TransactionFormPage from './pages/transaction-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Transactions List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/transaction/new">Add Transaction</NavLink>
        </div>
        <Route exact path="/" component={TransactionListPage}/>
        <Route path="/transaction/new" component={TransactionFormPage}/>
        <Route path="/transaction/edit/:_id" component={TransactionFormPage}/>
      </Container>
    );
  }
}

export default App;
