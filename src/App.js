import React, { Component } from 'react';
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    //When applied the color will the be calculated for light, main, dark and contrastText variations. For more granular control, you could pass in a plain object with any of those four keys.

//     light: orange[200] // same as '#FFCC80',
// main: '#FB8C00', // same as orange[600]
// dark: '#EF6C00',
// contrastText: 'rgb(0,0,0)'
    primary: orange
  }
})

//root refers to the 'root' Paper element.//
const styles = theme => console.log(theme) || ({
  root: {
    margin:20,
    padding:20,
    maxWidth: 400
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
})

export default withStyles(styles) (class App extends Component {

  state = {
    exercises: [
      {id: 1, title: 'Bench Press'},
      {id: 2, title: 'Deadlift'},
      {id: 3, title: 'Squats'}
    ],
    title: ''
  }

  handleChange = ({ target: {name, value}}) =>
    this.setState({
      [name]: value
    })

    handleCreate = e => {
      e.preventDefault()
      console.log(...this.state.exercises);
      if (this.state.title) {
        this.setState(({ exercises, title}) => ({
          exercises: [
            ...exercises,
            {
              title,
              id: Date.now()
            }
          ],
          title: ''
        }))
      }
    }

    handleDelete = id =>
      this.setState(({ exercises }) => ({
        exercises: exercises.filter(ex => ex.id !== id)
      }))


  render() {
    console.log(this.props);

    const { title, exercises } = this.state
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <Typography variant='display1' align='center'
          gutterBottom>
          <h1>Exercises</h1>
        </Typography>
        <form className={classes.form} onSubmit={this.handleCreate}>
          <TextField
            name='title'
            label='Exercise'
            value={title}
            onChange={this.handleChange}
            margin='normal'
          />
          <Button
            type='submit'
            color='primary'
            variant='raised'>
              Create
            </Button>
        </form>
        <List>
          {exercises.map(({id, title}) =>
        <ListItem key={id}>
          <ListItemText primary={title}/>
          <ListItemSecondaryAction>
            <IconButton
              color='primary'
              onClick={()=>this.handleDelete(id)}
              >
                <Delete/>
              </IconButton>
          </ListItemSecondaryAction>
        </ListItem>)}
        </List>
      </Paper>
    );
  }
}
)
