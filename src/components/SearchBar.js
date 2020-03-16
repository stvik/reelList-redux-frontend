import React, { Fragment,  useState } from 'react'
import { Grid, Typography, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { connect } from 'react-redux'
import { searchMovie, getRandomMovie } from '../redux/actions'



const SearchBar = (props) => {

	const [searchValue, setSearchValue] = useState('')

	const handleChange = (e) => {
		setSearchValue(e.target.value)
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			props.searchMovie(searchValue)
		}
	}

	const handleClick = () => {
		props.getRandomMovie()
	}

	return (
		<>
		 <FormControl fullWidth variant="outlined" color='secondary'>
	          <InputLabel >Search</InputLabel>
	          <OutlinedInput
	            value={searchValue}
	            onChange={handleChange}
	            onKeyPress={handleKeyPress}
	            labelWidth={60}
	            placeholder='Search movies by name...'
	          />
   		 <p>OR</p>
   		 <Button variant='contained' color='primary' onClick={handleClick}>Random Movie</Button>
   		 </FormControl>
		</>
	)
	

}

const mapDispatchToProps = (dispatch) => {
  return { searchMovie: (searchValue) => dispatch(searchMovie(searchValue)),
  			getRandomMovie: () => dispatch(getRandomMovie()),
  			 }
}

export default connect(null, mapDispatchToProps)(SearchBar)