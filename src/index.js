import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appcontainer from './App.container';


import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducer from './reducer';

const store = createStore(
    reducer
)

const HasProvider = (props) => {
    return ( 
    <Provider store={store}>
        <Appcontainer/>
    </Provider>);
   
}
    


ReactDOM.render(<HasProvider />, document.getElementById('root'));
registerServiceWorker();
