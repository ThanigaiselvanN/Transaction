import { client } from '.';

const url = '/transactions';

export function fetchTransactions(){
  return dispatch => {
    dispatch({
      type: 'FETCH_TRANSACTIONS',
      payload: client.get(url)
    })
  }
}

export function newTransaction() {
  return dispatch => {
    dispatch({
      type: 'NEW_TRANSACTION'
    })
  }
}

export function saveTransaction(transaction) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_TRANSACTION',
      payload: client.post(url, transaction)
    })
  }
}

export function fetchTransaction(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_TRANSACTION',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateTransaction(transaction) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: client.put(`${url}/${transaction._id}`, transaction)
    })
  }
}

export function deleteTransaction(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_TRANSACTION',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
