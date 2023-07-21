import React, { Component} from 'react';
import { connect } from 'react-redux';
import TransactionList from '../components/transaction-list';
import { fetchTransactions, deleteTransaction } from '../actions/transaction-actions';

class TransactionListPage extends Component {

  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <div>
        <h1>List of Transactions</h1>
        <TransactionList transactions={this.props.transactions} loading={this.props.loading} errors={this.props.errors} deleteTransaction={this.props.deleteTransaction}/>
      </div>
    )
  }
}

// Make transactions  array available in  props
function mapStateToProps(state) {
  return {
      transactions : state.transactionStore.transactions,
      loading: state.transactionStore.loading,
      errors: state.transactionStore.errors
  }
}

export default connect(mapStateToProps, {fetchTransactions, deleteTransaction})(TransactionListPage);
