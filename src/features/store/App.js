import { useRef, useState } from 'react';
import { useStore } from './index'
import { setJob, addJob, deleteJob, deleteAllJob, updateJob } from './action'

function AppTodo() {
    const [state, dispatch] = useStore()
    const [editting, setEditting] = useState({ index: 0, edit: false })

    const inputRef = useRef()
    const { todos, todoInput } = state

    const handleAddInput = () => {
        dispatch(addJob(todoInput))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleDelete = (idx) => {
        dispatch(deleteJob(idx))
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllJob())
    }

    const handleEdit = (idx, todo) => {
        setEditting({
            index: idx,
            edit: true
        })

        dispatch(setJob(todo))
        inputRef.current.focus()
    }

    const handleUpdate = () => {
        if (!todoInput.trim()) return
        dispatch(updateJob(todoInput, editting.index))
        dispatch(setJob(''))
        setEditting({
            ...editting,
            edit: false
        })
        inputRef.current.focus()
    }

    return (
        <div style={{ height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'block' }}>
                <input
                    ref={inputRef}
                    placeholder="Enter todo..."
                    value={todoInput}
                    onChange={e => {
                        dispatch(setJob(e.target.value))
                    }}
                />

                {editting.edit
                    ? <button onClick={handleUpdate} style={{ backgroundColor: 'green', color: '#fff' }} >Update</button>
                    : <button onClick={handleAddInput}>Add</button>
                }

                <ul>
                    {todos.map((todo, index) =>
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDelete(index)} style={{ margin: '0 5px 0 20px', color: 'red' }} >Delete</button>
                            <button
                                onClick={() => handleEdit(index, todo)}
                            >Edit</button>
                        </li>
                    )}
                </ul>

                <div style={{ display: 'flex' }}>
                    <p style={{ margin: '0' }} >You have {todos.length} todo</p>
                    <button
                        onClick={handleDeleteAll}
                        style={{ margin: '0 20px' }}
                    > Delete all </button>
                </div>
            </div>
        </div>
    )
}

export default AppTodo
