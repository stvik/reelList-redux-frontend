
export function fetchLists() {
	return (dispatch) => {
		fetch('http://localhost:3000/lists')
		.then(resp => resp.json())
		.then(lists => dispatch({type: 'GET_LISTS', lists}))
	}
}

export function searchMovie(searchString) {
	return (dispatch) => {
		fetch(`http://localhost:3000/movies?name=${searchString}`)
	}
}