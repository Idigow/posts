import ReactDOM from 'react-dom'
import App from "./App";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const initialState = {
    posts: [],
    loading: false
};

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'start':
            return {
                ...state,
                loading: true
            }
        case 'load':
            return {
                ...state,
                posts: action.payload,
                loading: false
            }




        default:
            return state;
    }
}

const store =createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)