import React from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

const ListsPage = () => {

	return (
		null
		)

}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

export default connect(mapStateToProps)(ListsPage)
