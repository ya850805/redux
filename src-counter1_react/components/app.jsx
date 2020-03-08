import React, {Component} from 'react'
export default class App extends Component {

    state = {
        count : 0
    }

    increment = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.得到原本count狀態
        const count = this.state.count
        // 3.更新狀態
        this.setState({count : count + number})
    }

    decrement = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.得到原本count狀態
        const count = this.state.count
        // 3.更新狀態
        this.setState({count : count - number})
    }

    incrementIfOdd = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.得到原本count狀態
        const count = this.state.count
        // 判斷滿足條件才更新狀態
        if(count%2===1){
            // 3.更新狀態
            this.setState({count : count + number})
        }
    }

    incrementAsync = () =>{
        // 1.得到選擇增加數量
        const number = this.select.value*1
        // 2.得到原本count狀態
        const count = this.state.count
        //啟動延時定時器
        setTimeout(() =>{
            this.setState({count : count + number})
        }, 1000)
    }

    render() {
        const {count} = this.state
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