import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import MoviesContainer from '../containers/MoviesContainer'



const ListPage = (props) => {
	return (
		<>
			<div>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					List Name
				</Typography>
			</div>
			<MoviesContainer />
		</>
		)

}



export default ListPage