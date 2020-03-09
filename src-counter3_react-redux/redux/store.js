import {createStore} from "redux"
import {counter} from './reducers'

//生成一個store對象
const store = createStore(counter) //內部會第一次調用reducer函數得到初始state

export default store
