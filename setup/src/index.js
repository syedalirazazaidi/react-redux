import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import './index.css';
import Counter from './Counter';
import {Provider} from "react-redux"
//import * as serviceWorker from './serviceWorker';
const initialState={
    count : 0
};
function reducer (state=initialState,action){
    switch(action.type){
        case "INCREMENT":
        return{
            count : state.count+1
        };
        case "DECREMENT":
        return{
            count : state.count-1
        };
        default:
        return state;
    }
}
const store = createStore(reducer);
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});

const App=()=>(
    <Provider store={store}>
      <Counter/>
    </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));



