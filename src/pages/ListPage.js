import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import MoviesContainer from '../containers/MoviesContainer'
import { connect } from 'react-redux'
import { showMoviesFromList } from '../redux/actions'



const ListPage = (props) => {
	console.log(props)


	const findListInfo = () => {

		const listId = parseInt(props.match.params.listId)

		const listObj = props.lists.find(list => list.id === listId)
		if (listObj) {
			props.showMoviesFromList(listObj.movies)
			return listObj
		}
	}

	const list = findListInfo()

	return (
		<>
			{list ?
			<>
			<div>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					{list.name }
				</Typography>
			</div>
			<MoviesContainer /> 
			</>
				:
				null
			 }
		</>
		)

}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

const mapDispatchToProps = (dispatch) => {
  return { showMoviesFromList: (movies) => dispatch(showMoviesFromList(movies)) }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListPage)