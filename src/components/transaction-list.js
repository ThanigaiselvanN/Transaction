import React from 'react';
import { Message, Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
 
export default function TransactionList({transactions, loading, errors, deleteTransaction}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No Transactions Found</Message.Header>
           <p>Add some new transactions to get started.</p>
           <Link to={'/transaction/new'} className="ui button primary">Add New Transaction</Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const rows = () => {
    return transactions.map(transaction=> {
      return (
        <Table.Row>
        <Table.Cell>
          <Label ribbon>{transaction.userName}</Label>
        </Table.Cell>
        <Table.Cell>{transaction.paymentMode}</Table.Cell>
        <Table.Cell>{transaction.amount}</Table.Cell>
      </Table.Row>
      )
    })
  }
  const transactionList = (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Name</Table.HeaderCell>
        <Table.HeaderCell>Payment Mode</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rows()}
     </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  )

  return (
    <div>
      { loading && loadingMessage }
      { transactions.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { transactions.length > 0 && transactionList }
    </div>
  )
}
