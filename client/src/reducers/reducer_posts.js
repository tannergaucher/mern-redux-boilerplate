import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }

    // refactor lodash to es6
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, '_id')
    // // console.log('reducer_posts', action.payload.data)

    case DELETE_POST:
      return _.omit(state, action.payload) // returns new state object with deleted object id not present

    default:
      return state
  }
}
