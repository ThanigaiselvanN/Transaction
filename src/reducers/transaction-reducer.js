const defaultState = {
  transactions: [],
  transaction: {userName:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_FULFILLED': {
      return {
        ...state,
        transactions: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_TRANSACTIONS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_TRANSACTIONS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_TRANSACTION': {
      return {
        ...state,
        transaction: {userName:{}}
      }
    }

    case 'SAVE_TRANSACTION_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_TRANSACTION_FULFILLED': {
      return {
        ...state,
        transactions: [...state.transactions, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_TRANSACTION_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { userName, paymentMode, amount } = data.errors;
      const errors = { global: data.message, userName, paymentMode, amount };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_TRANSACTION_PENDING': {
      return {
        ...state,
        loading: true,
        transaction: {userName:{}}
      }
    }

    case 'FETCH_TRANSACTION_FULFILLED': {
      return {
        ...state,
        transaction: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_TRANSACTION_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_TRANSACTION_FULFILLED': {
      const transaction = action.payload.data;
      return {
        ...state,
        transactions: state.transactions.map(item => item._id === transaction._id ? transaction : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_TRANSACTION_REJECTED': {
      const data = action.payload.response.data;
      const { userName, paymentMode, amount } = data.errors;
      const errors = { global: data.message, userName, paymentMode, amount };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_TRANSACTION_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        transactions: state.transactions.filter(item => item._id !== _id)
      }
    }

    default:
      return state;
  }
}
