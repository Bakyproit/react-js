import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux' ;
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch() ;
    const counter = useSelector(state => state.count) ;

    const hanldeIncreaseClick = useCallback(()=>{
        const action = increase() ;
        dispatch(action) ;
    },[]) ;
    const hanldeDecreaseClick = useCallback(()=>{
        const action = decrease();
        dispatch(action);
    },[]);

    return (
        <div>
            Counter : {counter}
            <div>
                <button onClick={hanldeIncreaseClick}>Increate</button>
                <button onClick={hanldeDecreaseClick}>Decreate</button>
            </div>
        </div>
    );
}

export default CounterFeature;