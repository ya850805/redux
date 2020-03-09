/*
包含所有action creator
同步的action都是返回一個物件
異步的action都是返回一個函數
 */

import {INCREMENT, DECREMENT} from "./action-type";

//增加的action
export const increment = (number) =>({type:INCREMENT, data:number})

//減少的action
export const decrement = (number) =>({type:DECREMENT, data:number})

//異步的action
export const incrementAsync = (number) =>{
    return dispatch => {
        //異步程式
        setTimeout(()=>{
            //1秒之後才會去分發增加的action
            dispatch(increment(number))
        }, 1000)
    }
}