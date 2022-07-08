import './App.css'
import AddItem from './components/AddItem'
import { data } from './data/data'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [todos, setTodos] = useState(data)
    const [editTodo, setEditTodo] = useState()

    const addOrUpdateItemOnClick = (item) => {
        let newTodo = item
        if (item.id) {
            newTodo = todos.find((tempTodo) => tempTodo.id === item.id)
            newTodo.title = item.title
            setTodos([...todos])
        } else {
            newTodo = { ...newTodo, state: false, id: uuidv4(), editing: false }
            setTodos([...todos, newTodo])
        }
    }
    const toggleItem = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state
            }
            return todo
        })
        setTodos(newTodos)
    }

    const removeItem = (id) => {
        const newTodos = todos.filter((todo) => id !== todo.id)
        setTodos(newTodos)
    }
    const editItem = (item) => {
        item.editing = true
        const newEditTodo = todos.find((todo) => item.id === todo.id)
        setEditTodo(newEditTodo)
    }

    return (
        <>
            <ul>
                {todos.map(function (item) {
                    return (
                        <li key={item.id}>
                            <span className={item.state ? 'completed' : ''}>
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    checked={item.state}
                                    onChange={() => toggleItem(item.id)}
                                />
                                <label htmlFor={item.id}> {item.title}</label>
                            </span>
                            <label>
                                <input
                                    type="button"
                                    className="delete"
                                    onClick={() => removeItem(item.id)}
                                />
                                <span className="label icon"></span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    className="edit"
                                    checked={item.editing}
                                    onChange={() => editItem(item)}
                                />
                                <span className="label icon"></span>
                            </label>
                        </li>
                    )
                })}
            </ul>
            <br />
            <AddItem onClick={addOrUpdateItemOnClick} editTodo={editTodo} />
        </>
    )
}

export default App
