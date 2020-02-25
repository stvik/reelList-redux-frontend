import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'



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
		</>
		)

}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

export default connect(mapStateToProps)(SearchPage)