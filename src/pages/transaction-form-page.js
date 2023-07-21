import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newTransaction, saveTransaction, fetchTransaction, updateTransaction } from '../actions/transaction-actions';
import TransactionForm from '../components/transaction-form';


class TransactionFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchTransaction(_id)
    } else {
      this.props.newTransaction();
    }
  }

  submit = (transaction) => {
    if(!transaction._id) {
      return this.props.saveTransaction(transaction)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateTransaction(transaction)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <TransactionForm transaction={this.props.transaction} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    transaction: state.transactionStore.transaction,
    errors: state.transactionStore.errors
  }
}

export default connect(mapStateToProps, {newTransaction, saveTransaction, fetchTransaction, updateTransaction})(TransactionFormPage);
