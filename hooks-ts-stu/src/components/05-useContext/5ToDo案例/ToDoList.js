import React, { useContext } from "react";
import { myContext } from "./context";

const ToDoList = () => {
    const { list, dispatch1 } = useContext(myContext)
    return (
        <div>
            <ul>
                {list.map(item => {
                    return (
                        <li onClick={()=>dispatch1({ type:'toggle',id:item.id})}
                            style={{ textDecoration: item.done ? 'line-through' : '' }}
                            key={item.id}>{item.name
                            }
                            <button onClick={() => dispatch1({ type: 'del', id: item.id })}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ToDoList