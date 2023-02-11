import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id : 1 ,
            title : 'eat',
            status : 'new',
        },
        {
            id : 2 , 
            title : 'Sleep',
            status : 'completed',
        },
        {
            id : 3 , 
            title : 'code',
            status : 'new',
        },
    ]

    const [todoList , setTodoList] = useState(initTodoList) ; 
    const [filteredStatus , setFilteredStatus] = useState('all') ;
    const handleTodoClick = (todo , idx) => {
        // console.log(todo , idx) ;
        //clone arr
        const newTodoList = [...todoList] ;
        newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new' ? 'completed' : 'new' ,
        }
        //update
        setTodoList(newTodoList) ;
    }
    const handleShowAll = () => {
        setFilteredStatus('all') ;
    }
    const handleShowCompleted = () =>{
        setFilteredStatus('completed') ;
    }
    const handleShowNew = () =>{
        setFilteredStatus('new') ;
    }
    const renderedTodoList = 
    todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status) ;
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>   
            </div>
        </div>
    );
}

export default TodoFeature;