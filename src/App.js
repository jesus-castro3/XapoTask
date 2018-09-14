import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return <Provider store={store}>
        <div className="App">
          <Sidebar />
          <ProjectViewContainer />
        </div>
      </Provider>;
  }
}

export default App;
