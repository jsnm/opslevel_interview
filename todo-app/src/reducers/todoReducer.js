import { CREATE_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/todo'


const test_state = {
    todos: {
        1600045087283: {
            text: 'meditate',
            checked: true
        },
        1600045087284: {
            text: 'coffee',
            checked: false,
        },
        1600045087285: {
            text: 'focused work',
            checked: false,
        }
    }
}

export default (state = test_state, action) => {
    switch (action.type) {
    case CREATE_TODO:
        return {
            ...state,
            todos: {
                ...state.todos,
                [Date.now()]: {checked: false, text: ''}
            }
        }
    case DELETE_TODO:
        const {[action.key]: value, ...todos} = state.todos
        return {
            ...state,
            todos
        }
    case EDIT_TODO:
        return {
            ...state,
            todos: {
                ...state.todos,
                [action.key]: {
                    ...state.todos[action.key],
                    text: action.text
                }
            }
        }
    case TOGGLE_TODO:
        console.log(action.key)
        return {
            ...state,
            todos: {
                ...state.todos,
                [action.key]: {
                    ...state.todos[action.key],
                    checked: action.checked
                }
            }
        }
    default:
            return state
    }   
}
