import { useReducer, useState } from 'react'


const initialState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {

    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default: throw new Error('Invalid Action')
    }
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div style={{ padding: '20px' }}>
            <div>{count}</div>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>

            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
        </div>
    )
}

export default UseReducer;