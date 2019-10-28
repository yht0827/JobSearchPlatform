import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer from "Store/modules";

const logger = createLogger();
const middlewares = [logger,ReduxThunk];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;    
const composeEnhancers = devtools || compose;

const configure = () => createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares))); 

export default configure;
