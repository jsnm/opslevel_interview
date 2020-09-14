import React from 'react'

import { connect } from 'react-redux'


class Todo extends React.Component {
    render() {
        const {todo} = this.props
        return(
            <li className='todo' >
                <input type='checkbox' onChange={(e)=>{this.props.toggleTodo(e, this.props.id)}} defaultChecked={todo.checked} />
                <input type='text' onChange={(e)=>{this.props.editTodo(e, this.props.id)}} value={todo.text} />
                <button onClick={(e)=>{this.props.deleteTodo(this.props.id)}}>x</button>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (e, key) => {
        dispatch({type: 'EDIT_TODO', checked: e.target.value, key: key})
    },
    editTodo: (e, key) => {
        dispatch({type: 'EDIT_TODO', text: e.target.value, key: key})
    },
    deleteTodo: (key) => {
        dispatch({type: 'DELETE_TODO', key: key})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

