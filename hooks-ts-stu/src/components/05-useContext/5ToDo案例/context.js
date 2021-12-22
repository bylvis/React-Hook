import React, { useReducer } from "react";

export const myContext = React.createContext()

const reducer1 = (state,action) => {
    switch (action.type){
        case 'add': return [...state,{id:Date.now(),name:action.name,done:false}]
        case 'del': return state.filter(v=>v.id!==action.id)
        case 'toggle':
            let newState = [...state]
            let todo = newState.find(v=>v.id===action.id)  
            todo.done = !todo.done 
            console.log(todo);
            return newState
        default: return state
    }
}

const reducer2 = (state,action) => {
    switch(action.type){
        case 'filter':
            return action.filter
    }
}
const initalValue = [{id:1,name:'吃饭',done:false}]
const filter = ['filter']
export const MyProvider = ({children}) => {
    const [list,dispatch1] = useReducer(reducer1,initalValue)
    const [filter,dispatch2]= useReducer(reducer2,'all')
    const value = {
        list,
        dispatch1,
        filter,
        dispatch2
    }
    return (
        <myContext.Provider value={value}>{children}</myContext.Provider>
    )
}