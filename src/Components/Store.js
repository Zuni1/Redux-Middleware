import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import ReduxThunk from 'redux-thunk';
import { fetchUsers } from "./Actions";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store

store.dispatch(fetchUsers())
store.subscribe(() => {console.log(store.getState())})