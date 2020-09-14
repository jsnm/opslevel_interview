import React from 'react'
import Todo from './todo.js'


function TodoList(props) {
    const todos = props.todos || {}

    const listItems = Object.keys(todos).map((key) => <Todo todo={todos[key]} id={key} key={key} />)

    return (
        <ul className='todo-list'>{listItems}</ul>
    )
}


export {
    TodoList as default,
    TodoList
}