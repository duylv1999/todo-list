import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJobs, addJob, deleteJob } from './action'
import logger from './logger'

// useReducer
// 1. Init state
// 2. action
// 3. Reducer
// 4. Dispatch


// 1. Init state 
// 2.action 
// 3. Reducer
function TodoReducer() {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const inputRef = useRef()
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJobs(''))
        inputRef.current.focus()
    }

    const handleDelete = (idx) => {
        dispatch(deleteJob(idx))
    }

    return (
        <div style={{ padding: '20px' }}>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(setJobs(e.target.value))
                }}
            />
            <button
                onClick={handleSubmit}
            >Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            onClick={() => handleDelete(index)}
                        >&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TodoReducer;