import React from 'react'
import { Grid, Typography, Button, ThemeProvider, createMuiTheme } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';

const Homepage = ()  => {

	return (

		<Grid container direction='row' justify='center' alignItems='flex-end' >
			<Grid container direction='row' justify='left' alignItems='flex-end' xs={12}>
				<Typography variant='h1' className='HomeHeader' style={{fontSize: '200px', fontWeight: '300'}}> <TheatersOutlinedIcon style={{fontSize:'150px'}} />ReelList </Typography>
			</Grid>
			<Grid container direction='row' justify='left' alignItems='flex-end' xs={12}>
				<Button variant='contained' color='primary'>Search Movies</Button>
				<Button variant='contained' color='secondary'>View Lists</Button>
			</Grid>
	    </Grid>

		)


}

export default Homepage