import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import clientReducer from './reducer/client';

const rootReducer = combineReducers({
    client: clientReducer,
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;