import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'

//生成一個store對象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))`` //應用上異步的中間件
) //內部會第一次調用reducer函數得到初始state

export default store
