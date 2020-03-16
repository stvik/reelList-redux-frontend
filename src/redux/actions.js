
export function fetchLists() {
	return (dispatch) => {
		fetch('http://localhost:3000/lists')
		.then(resp => resp.json())
		.then(lists => dispatch({type: 'GET_LISTS', lists}))
	}
}

export function searchMovie(searchString) {
	return (dispatch) => {
		fetch(`http://localhost:3000/movies?search=${searchString}`)
		.then(resp => resp.json())
		.then(movies => dispatch({type: 'SHOW_MOVIES', movies}))
	}
}

export function showMoviesFromList(movies) {
	return (dispatch) => {
		dispatch({type: 'SHOW_MOVIES', movies})
	}
}

export function clearMovies() {
	return (dispatch) => {
		dispatch({type:'CLEAR_MOVIES'})
	}
}

export function getRandomMovie() {
	return(dispatch) => {
		fetch(`http://localhost:3000/movies?random=true`)
		.then(resp => resp.json())
		.then(movie => dispatch({type: 'RANDOM_MOVIE', movie}))
	}
}

export function createList(configObj) {
	return(dispatch) => {
		fetch(`http://localhost:3000/lists`, configObj)
		.then(resp => resp.json())
		.then(list => dispatch({type: 'ADD_LIST', list}))
	}
}

export function createMovie(movie, list) {
	const configObj =
		{
	  		method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(movie)
  		}

	return(dispatch) => {
		fetch(`http://localhost:3000/movies`, configObj)
		.then(resp => resp.json())
		.then(movie => console.log(movie))
	}
}
