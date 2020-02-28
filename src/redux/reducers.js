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

function moviesReducer(state=[], action) {
	switch (action.type) {
		case 'SHOW_MOVIES':
			return action.movies
		case 'RANDOM_MOVIE':
			return [action.movie]
		case 'CLEAR_MOVIES':
			return []
		default:
			return state
	}
}

const rootReducer = combineReducers({
  lists: listsReducer,
  movies: moviesReducer
})

export default rootReducer