import React from 'react'
import { connect } from 'react-redux'
import TodoList from './components/todoList'

import './css/App.css'


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          TODO: 
        </header>
        <TodoList todos={this.props.todoReducer.todos} />
        <button onClick={this.props.createTodo}>+</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTodo: () => dispatch({type: 'CREATE_TODO'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
