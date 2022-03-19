import React from 'react';
import classnames from 'classnames';
import './style.scss'

function TodoList({ todoListJobs, onClickTodoList }) {

    const handleTodoClick = (todo, index) => {
        if (!onClickTodoList) return;

        onClickTodoList(todo, index);
    }


    return (
        <>
            <ul className="todo-list">
                {todoListJobs.map((todo, index) => (
                    <li
                        key={todo.id}
                        className={classnames({
                            'todo-item': true, //bat buoc co class todo-item
                            complete: todo.status === 'completed'
                        })}
                        onClick={() => handleTodoClick(todo, index)}
                    >{todo.job}</li>
                ))}
            </ul>

        </>
    );
}

export default TodoList;