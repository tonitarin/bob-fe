import axios from 'axios'

import { CONSTANTS } from '../constants'

const getUsers = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:8080')
  dispatch({ type: CONSTANTS.GET_USERS, payload: data })
  return
}

export { getUsers }
