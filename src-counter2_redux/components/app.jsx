import React, {Component} from 'react'

import * as actions from '../redux/actions'

export default class App extends Component {

    increment = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.調用store的方法更新狀態
        this.props.store.dispatch(actions.increment(number))
    }

    decrement = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.調用store的方法更新狀態
        this.props.store.dispatch(actions.decrement(number))
    }

    incrementIfOdd = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.得到原本count狀態
        const count = this.props.store.getState()
        // 判斷滿足條件才更新狀態
        if(count%2===1){
            // 3.調用store的方法更新狀態
            this.props.store.dispatch(actions.increment(number))
        }
    }

    incrementAsync = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        //啟動延時定時器
        setTimeout(() =>{
            // 2.調用store的方法更新狀態
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    }

    render() {
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}