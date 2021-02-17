import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true
});

export function configureStore(){
    let store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk, logger),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store;
}