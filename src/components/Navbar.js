import React from 'react'
import { Link, Breadcrumbs, Grid } from '@material-ui/core'
import { Link as RLink} from 'react-router-dom'

const Navbar = () => {

	return (

	<Grid container justify='center' spacing={1}>
		 <Breadcrumbs aria-label="breadcrumb">
		      <Link color="inherit"  component={RLink} to="/" className='NavbarFont'>
		       		Home
		      </Link>
		      <Link color="inherit" component={RLink} to="/movies" className='NavbarFont'>
		       		Movies
		      </Link>
		      <Link color="inherit" component={RLink} to="/lists" className='NavbarFont'>
		        	Lists
		      </Link>
	    </Breadcrumbs>
    </Grid>
		)


}

export default Navbar