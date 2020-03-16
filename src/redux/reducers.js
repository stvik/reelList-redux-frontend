import { combineReducers } from 'redux'
import * as action from './actions'

function listsReducer(state=[], action) {
	switch (action.type) {
		case 'GET_LISTS':
			return action.lists
		case 'ADD_LIST':
			return [...state, action.list]
		case 'ADD_MOVIE_TO_LIST':
			let foundList = state.find(list => list.id === action.movie.adds[0].list_id)
			foundList.movies = [...foundList.movies, action.movie]
			return state
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