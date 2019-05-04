import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false
      },
      {
        title: 'Walk',
        id: 2,
        completed: false
      },
      {
        title: 'Go to Gym',
        id: 3,
        completed: false
      }
    ]
  };

  //Completed checkBox
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete item
  deleteItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className='App'>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
