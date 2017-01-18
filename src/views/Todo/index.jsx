import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'

class Todo extends Component {
  textChange = () => {
    this.props.dispatch({type: 'TEXT_CHANGE', text: this.input.value})
  }
  addTodo = () => {
    this.props.dispatch({type: 'ADD_TODO'})
  }
  removeTodo = (id) => {
    this.props.dispatch({type: 'REMOVE_TODO', id: id})
  }
  render() {
    const {state} = this.props
    return (
      <div id="Todo">
        <ul>
          {state.todos.map((item, index) => {
            return (
              <li key={item.id}>
                <span>{item.id}</span>
                <button onClick={() => this.removeTodo(index)}>remove</button>
                <p>{item.text}</p>
              </li>
            )
          })}
        </ul>
        <div className="add">
          <input type="text" value={state.tempText} onChange={this.textChange} ref={(input) => this.input = input}/>
          <button disabled={!state.tempText} onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state: state.Todo}))(Todo)
