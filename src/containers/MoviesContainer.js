import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'




const MoviesContainer = (props) => {

	const displayMovies = () =>  {
		if (props.movies.length) {
			return props.movies.map(movie => <MovieCard movie={movie} />)			
		} else {
			return <div>Nothing here! </div>
		}
	}


	return (
		<>
			<Grid container justify='space-around' >
				{displayMovies()}
			</Grid>
		</>
		)

}

const mapStateToProps = (state) => {
  return {movies: state.movies}
}

export default connect(mapStateToProps)(MoviesContainer)