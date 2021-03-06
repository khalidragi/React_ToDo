import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <input
          className='inputForm'
          type='text'
          name='title'
          placeholder='Add Todo..'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className='btn'
          type='submit'
          value='Submit'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTodo;
