import './App.css'
import AddItem from './components/AddItem'
import { data } from './data/data'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [todos, setTodos] = useState(data)

    const addItemOnClick = (todo) => {
        const newTodo = {
            id: uuidv4(),
            title: todo,
            state: false,
        }
        setTodos([...todos, newTodo])
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

    return (
        <>
            <ul>
                {todos.map(function (item) {
                    return (
                        <li
                            className={item.state ? 'completed' : ''}
                            key={item.id}
                        >
                            <input
                                type="checkbox"
                                id={item.id}
                                checked={item.state}
                                onChange={() => toggleItem(item.id)}
                            />
                            <label for={item.id}> {item.title}</label>
                        </li>
                    )
                })}
            </ul>
            <AddItem onClick={addItemOnClick} />
        </>
    )
}

export default App
