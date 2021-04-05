import React from "react";
import ReactDOM from "react-dom";
import combineReducers from "./components/redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";

//const store=createStore(combineReducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers,composeEnhancers(applyMiddleware(thunkMiddleware)));//for brawser extension redux

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
