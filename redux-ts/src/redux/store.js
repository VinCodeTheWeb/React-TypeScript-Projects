import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = createStore(
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
