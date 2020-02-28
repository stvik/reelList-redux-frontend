import React, { Fragment } from 'react'
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core'
import { connect } from 'react-redux'
import { createList } from '../redux/actions'
import ListCard from '../components/ListCard'

const ListsPage = (props) => {

  const [open, setOpen] = React.useState(false)

  const [formContent, setFormContent] = React.useState({name:'', creator:''})

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
  	setOpen(false)


  	const configObj = {
  		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(formContent)
  	}

  	props.createList(configObj)
  }

  const handleChange = (e) => {
  	if (e.currentTarget.id === 'name'){
  		setFormContent({name: e.currentTarget.value, creator: formContent.creator})
  	} else if (e.currentTarget.id === 'creator') {
  		setFormContent({name:formContent.name, creator: e.currentTarget.value})
  	}
  }

	return (
		<>
			<Grid>
				<Typography variant='h1' gutterBottom className='PageHeader'>
					Movie Lists
				</Typography>
				<Button variant='contained' color='primary' onClick={handleClickOpen}>Create New List</Button>
			</Grid>
			<Grid container justify='space-around' spacing={5}>
				{props.lists.map((list,index) => <ListCard list={list} key={index}/>)}
			</Grid>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
		        <DialogTitle id="form-dialog-title">Create a New Movie List</DialogTitle>
		        <DialogContent>
		          <TextField
		            autoFocus
		            margin="dense"
		            id="name"
		            label="List Name"
		            fullWidth
		            onChange={handleChange}
		          />
		          <TextField
		            margin="dense"
		            id="creator"
		            label="Creator"
		            fullWidth
		            onChange={handleChange}
		          />
		        </DialogContent>
		        <DialogActions>
		          <Button onClick={handleClose} color="primary">
		            Cancel
		          </Button>
		          <Button onClick={handleSubmit} color="primary">
		            Create
		          </Button>
		        </DialogActions>
	      	</Dialog>
		</>
		)

}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

const mapDispatchToProps = (dispatch) => {
	return { createList: (configObj) => dispatch(createList(configObj)) }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListsPage)
