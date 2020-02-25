import React, { Fragment,  useState } from 'react'
import { Grid, Typography, FormControl, InputLabel, OutlinedInput } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { connect } from 'react-redux'
import { searchMovie } from '../redux/actions'



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
	            style={{color: 'white'}}
	          />
   		 </FormControl>
		</>
	)
	

}

const mapDispatchToProps = (dispatch) => {
  return { searchMovie: (searchValue) => dispatch(searchMovie(searchValue)) }
}

export default connect(null, mapDispatchToProps)(SearchBar)