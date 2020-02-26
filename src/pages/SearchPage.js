import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SearchBar from '../components/SearchBar'
import MoviesContainer from '../containers/MoviesContainer'



const SearchPage = (props) => {
	return (
		<>
			<div>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					Search Movies
				</Typography>
			</div>
			<Grid container justify='space-around' className='searchPageContainer'>
				<SearchBar />
			</Grid>
			<MoviesContainer />
		</>
		)

}



export default SearchPage