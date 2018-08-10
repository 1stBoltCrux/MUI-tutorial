import React, { Component } from 'react';
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'

class App extends Component {
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
    const { title, exercises } = this.state
    return (
      <Paper>
        <Typography variant='display1' align='center'
          gutterBottom>
          <h1>Exercises</h1>
        </Typography>
        <form onSubmit={this.handleCreate}>
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

export default App;
