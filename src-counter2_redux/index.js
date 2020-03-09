import React from 'react'
import ReactDOM from 'react-dom'

import App from "./components/app";
import store from "./redux/store";

function render(){
    ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

//初始化渲染
render()

//訂閱監聽(store中的狀態變化了，就會自動調用進行重繪)
store.subscribe(render)