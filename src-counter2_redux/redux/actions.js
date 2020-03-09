/*
包含所有action creator
 */

import {INCREMENT, DECREMENT} from "./action-type";

//增加的action
export const increment = (number) =>({type:INCREMENT, data:number})

//減少的action
export const decrement = (number) =>({type:DECREMENT, data:number})