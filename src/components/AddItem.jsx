import { useEffect, useState } from 'react'

const AddItem = ({ onClick, editTodo }) => {
    const [inputValue, setInputValue] = useState({
        title: '',
    })
    useEffect(() => {
        console.log('AddItem editTodo', editTodo)
        if (editTodo && editTodo.title) {
            setInputValue(editTodo)
        }
    }, [editTodo])

    const onChangeHandler = (event) => {
        setInputValue({ ...inputValue, title: event.target.value })
    }

    return (
        <>
            <input
                type="text"
                placeholder="Add or update item"
                value={inputValue.title}
                onChange={onChangeHandler}
            />
            <button
                className="btn btn-primary"
                onClick={() => {
                    setInputValue({
                        title: '',
                    })
                    inputValue.editing = false
                    onClick(inputValue)
                }}
            >
                Add Item
            </button>
        </>
    )
}

export default AddItem
