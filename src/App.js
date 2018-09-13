import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Sidebar from './components/Sidebar';
import ProjectView from './components/ProjectView';
import rootReducer from './reducers';
import root from './sagas';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <div className="App">
          <Sidebar />
          <ProjectView />
        </div>
      </Provider>
    )
  }
}

export default App;
