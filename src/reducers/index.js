import { CONSTANTS } from '../constants'

const initialState = {
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_USERS:
      return { ...state, users: [...action.payload] }
    default:
      return state
  }
}

export { usersReducer }
