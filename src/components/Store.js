import {createStore} from 'redux';
import reducers from './reducers/Language'

const Store = createStore(reducers);

export default Store;