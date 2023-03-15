import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames' ;
import styles from './styles.scss' ;

const cx = classnames.bind(styles)
TodoList.propTypes = {
    TodoList : PropTypes.array , 
    onTodoClick : PropTypes.func ,
};
TodoList.defaultProps = {
    todoList : [] ,
    onTodoClick : null ,
}

function TodoList({todoList , onTodoClick}) {
    // const {} = 

    const handleTodoClick = (todo , idx) =>{
        if(!onTodoClick) return ; 
        onTodoClick(todo , idx)
    }
    return (
        <ul className={cx('todo-list')}>
            {todoList.map((todo , idx) => (
                <li 
                key={todo.id} 
                className={classnames({
                    'todo-item' : true ,
                    completed : todo.status ==='completed'
                })}
                onClick = {() => handleTodoClick(todo , idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;