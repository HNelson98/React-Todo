import React from 'react';
import Task from './Todo';

const TodoList = props => {
    return (
        <div className= 'TodoList'>
            {props.tasks.map(task =>
                <Task key={task.id} task = {task} toggleTask ={props.toggleTask} />)}
                <button className="clearBtn" onClick={props.clearCompleted}>
                    Clear Completed
                </button>
        </div>
    )
}

export default TodoList;