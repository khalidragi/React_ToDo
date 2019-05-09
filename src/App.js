import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/UI/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import About from './Components/Pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out trash',
        completed: false
      },
      {
        title: 'Walk',
        id: uuid.v4(),
        completed: false
      },
      {
        title: 'Go to Gym',
        id: uuid.v4(),
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

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  />
                  <blockquote className='quote'>
                    "Life is too complicated not to be orderly."
                    <footer>_Martha Stewart</footer>
                  </blockquote>
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
