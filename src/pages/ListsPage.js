import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import ListCard from '../components/ListCard'

const ListsPage = (props) => {

	return (
		<>
			<div>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					Movie Lists
				</Typography>
			</div>
			<Grid container justify='space-around' spacing={5}>
				{props.lists.map((list,index) => <ListCard list={list} key={index}/>)}
			</Grid>
		</>
		)

}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

export default connect(mapStateToProps)(ListsPage)
