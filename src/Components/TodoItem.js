import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      textAlign: 'left',
      border: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <Checkbox
          onChange={this.props.markComplete.bind(this, id)}
          style={{ float: 'left' }}
        />
        <p style={{ textAlign: 'center' }}>
          {title}
          <button
            onClick={this.props.deleteItem.bind(this, id)}
            style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  fontWeight: 'bold',
  background: '#ff0034',
  color: '#fff',
  border: 'none',
  padding: '2px 7px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
