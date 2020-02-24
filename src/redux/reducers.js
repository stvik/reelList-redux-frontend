import { combineReducers } from 'redux'
import * as action from './actions'

function listsReducer(state=[], action) {
	switch (action.type) {
		case 'GET_LISTS':
			return action.lists
		default :
			return state
	}
}

const rootReducer = combineReducers({
  lists: listsReducer,
})

export default rootReducer