import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Sidebar from './components/Sidebar';
import ProjectViewContainer from './containers/ProjectViewContainer';
import rootReducer from './reducers';
import rootSaga from './sagas';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Sidebar/>
      <ProjectViewContainer />
    </div>
  </Provider>
);

export default App;
