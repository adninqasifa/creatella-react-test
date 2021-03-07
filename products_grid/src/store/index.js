import {createStore} from 'redux';
import reducers from './reducers/index.js';

const store = createStore(reducers); // cause createStore need a reducer

export default store;
