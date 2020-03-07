import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper, Typography, InputLabel, FormControl, Select, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const MovieModal = (props) => {
  console.log(props)

  const [state, setState] = React.useState({
    list: null,
  })

  const handleChange = event => {
    setState({
      list: event.target.value,
    });
  }

  console.log(state)

	return (
      <Paper className='movieModal'>
        <Typography variant='h2' gutterBottom className='PageHeader'>
          {props.movie.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={5} >
            <img src={props.movie.picture} className='modalImage' />
            <br />
            {props.movie.adds ?
          <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                  Add To List
              </InputLabel>
              <Select
                native
                value={state.list}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >  
              {props.lists.map(list => <option value={list.id}>{list.name}</option>)}      
 
        </Select>
        <Button variant='contained' color='primary'>Add</Button>
      </FormControl>
            :
            null
            }
          </Grid>
            <Grid item xs={7} >
              <div>
                <Rating name='half-rating-read' value={props.movie.rating} precision={0.1} readOnly size='large' max={10}/> 
                <Typography variant='h6' className='PageHeader'>TMDB Rating: {props.movie.rating}</Typography>
              </div>
              <div>
                <Typography variant='body1' className='PageHeader'>{props.movie.description}</Typography>
                </div>

                {props.movie.trailer ?
                
                  <iframe 
                    align='center'
                    allowFullScreen="allowfullscreen"
                    frameBorder='0'
                    src={`https://www.youtube.com/embed/${props.movie.trailer}`}
                    className='trailerBox'
                    >
                    </iframe>
                
                  :
                  null
                }
            </Grid>
        </Grid>
      </Paper>
		)
}

const mapStateToProps = (state) => {
  return {lists: state.lists}
}

export default connect(mapStateToProps)(MovieModal)