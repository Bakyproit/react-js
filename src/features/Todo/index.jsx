import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import TodoList from './components/TodoList';
import DetaiPage from './pages/DetaiPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
    //math.path = cha
    <div>
    <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetaiPage} exact />
        <Route component={NotFound} />
    </Switch>
    </div>
    );
}
export default TodoFeature;
