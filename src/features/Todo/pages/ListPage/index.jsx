import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string' ;
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {
    
};

function ListPage(props) {
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
    const location = useLocation() ;
    const history = useHistory() ;
    const match = useRouteMatch() ;

    const [todoList , setTodoList] = useState(initTodoList) ; 
    const [filteredStatus , setFilteredStatus] = useState(() => {
            const params = queryString.parse(location.search);
            // console.log(params) ;
            return params.status ||'all' ;
    }) ;

    useEffect(() =>{
        const params = queryString.parse(location.search);
            // console.log(params) ;
            setFilteredStatus(params.status ||'all') ;
    },[location.search]) ;

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
        // setFilteredStatus('all') ;
        const queryParams = {status : 'all'} ;
        history.push({
            pathname : match.path ,
            search : queryString.stringify(queryParams) ,
        });
    }
    const handleShowCompleted = () =>{
        // setFilteredStatus('completed') ;
        const queryParams = {status : 'completed'} ;
        history.push({
            pathname : match.path ,
            search : queryString.stringify(queryParams) ,
        });
    }
    const handleShowNew = () =>{
        // setFilteredStatus('new') ;
        const queryParams = {status : 'new'} ;
        history.push({
            pathname : match.path ,
            search : queryString.stringify(queryParams) ,
        });
    }
    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status) ;
    },[todoList , filteredStatus]);
    
    const handleTodoFormSubmit = (values) => {
        console.log('form submit ' , values) ;
        const newTodo = {
            id : todoList.length + 1 , 
            title : values.title , 
            status : ' new' ,
        } ; 
        const newTodoList = [...todoList , newTodo] ; 
        setTodoList(newTodoList) ;
    } ;

    return (
        <div>
            <h3>To do Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
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

export default ListPage;