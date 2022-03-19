import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoListFeature() {
    const initTodoListJobs = [
        {
            id: 1,
            job: "Ăn sáng",
            status: "completed"
        },
        {
            id: 2,
            job: "Đi 2bro",
            status: "new"
        },
        {
            id: 3,
            job: "Ngủ trưa",
            status: "completed"
        },
        {
            id: 4,
            job: "Code",
            status: "new"
        },
    ]

    const [todoListJobs, setTodoListJobs] = useState(initTodoListJobs)
    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoListJobs]

        // toggle status
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
        }

        // updateTodolist
        setTodoListJobs(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }

    const handleShowCompleted = () => {
        setFilteredStatus('completed')
    }

    const handleShowNew = () => {
        setFilteredStatus('new')
    }

    const renderedTodoList = todoListJobs.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoListJobs={renderedTodoList} onClickTodoList={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}> Show All </button>
                <button onClick={handleShowCompleted}> Show Completed </button>
                <button onClick={handleShowNew}> Show New </button>
            </div>
        </div>
    );
}

export default TodoListFeature;