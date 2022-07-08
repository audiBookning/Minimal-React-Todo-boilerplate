import { useState } from 'react'

const AddItem = ({ onClick }) => {
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <>
            <input
                type="text"
                placeholder="Add item"
                onChange={onChangeHandler}
            />
            <button
                className="btn btn-primary"
                onClick={() => onClick(inputValue)}
            >
                Add Item
            </button>
        </>
    )
}

export default AddItem
