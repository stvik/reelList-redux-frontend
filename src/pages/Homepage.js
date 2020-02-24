import React from 'react'
import { Grid, Typography, Button, ThemeProvider, createMuiTheme } from '@material-ui/core'

const Homepage = ()  => {

	return (

		<Grid container direction='row' justify='center' alignItems='flex-end' >
			<Grid container direction='row' justify='center' alignItems='flex-end' xs={12}>
				<Typography variant='h1' className='HomeHeader' style={{fontSize: '200px'}}> ReelList </Typography>
			</Grid>
			<Grid container direction='row' justify='center' alignItems='flex-end' xs={12}>
				<Button variant='contained' color='primary'>Search Movies</Button>
				<Button variant='contained' color='secondary'>View Lists</Button>
			</Grid>
	    </Grid>

		)


}

export default Homepage