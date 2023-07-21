import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.userName) {
    errors.userName = {
      message: 'You need to provide User Name'
    }
  }
  if(!values.paymentMode) {
    errors.paymentMode = {
      message: 'You need to provide a payment mode'
    }
  } 
  if(!values.amount) {
    errors.amount = {
      message: 'You need to provide an Amount'
    }
  }
  return errors;
}

class TransactionForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load transaction Asynchronously
    const { transaction } = nextProps;
    if(transaction._id !== this.props.transaction._id) { // Initialize form only once
      this.props.initialize(transaction)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, transaction } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{transaction._id ? 'Edit transaction' : 'Add New transaction'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="userName" type="text" component={this.renderField} label="User Name"/>
            <Field name="paymentMode" type="text" component={this.renderField} label="Payment Mode"/>
            <Field name="amount" type="text" component={this.renderField} label="Amount"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'transaction', validate})(TransactionForm);
