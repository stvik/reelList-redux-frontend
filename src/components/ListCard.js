import React from 'react'
import { Link, Card, Button, CardActionArea, CardContent, CardActions, CardMedia, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const ListCard = (props) => {

  let history = useHistory()

  const pickImage = () => {
    if (props.list.movies){
      return props.list.movies[0].picture
    }
  }

  const handleClick = () => {
   history.push(`/lists/${props.list.id}`)
  }

	return (

	<Card >
      <CardActionArea onClick={handleClick}>
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.list.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          	Created by: {props.list.creator} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

		)


}

export default ListCard