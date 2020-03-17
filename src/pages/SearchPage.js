import React, { Fragment, Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { clearMovies } from '../redux/actions'

import SearchBar from '../components/SearchBar'
import MoviesContainer from '../containers/MoviesContainer'



class SearchPage extends Component {

	componentDidMount() {
		this.props.clearMovies()
	}

	render() {
	return (
		<>
			<div>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					Search Movies
				</Typography>
			</div>
			<SearchBar />
			<MoviesContainer />
		</>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
  return { clearMovies: () => dispatch(clearMovies()) }
}


export default connect(null, mapDispatchToProps)(SearchPage)