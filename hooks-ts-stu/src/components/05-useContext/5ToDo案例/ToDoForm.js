import React, { useContext, useRef } from "react";
import { myContext } from "./context";

const ToDoForm = () => {
    const inputRef = useRef()
    const {dispatch1} = useContext(myContext)
    const addTodo = () => {
        dispatch1({type:'add',name:inputRef.current.value})
    }
    return (
        <div>
            <input ref={inputRef}></input>
            <button onClick={addTodo}>添加</button>
        </div>
    )
}
export default ToDoForm