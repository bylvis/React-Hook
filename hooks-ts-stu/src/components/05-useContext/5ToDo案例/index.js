import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import './index.css'
import { MyProvider } from './context'
import TodoFotter from "./ToDoFotter";
const App = () => {
    return (
        <div>
            <MyProvider>
                <ToDoForm></ToDoForm>
                <ToDoList></ToDoList>
                <TodoFotter></TodoFotter>
            </MyProvider>
        </div>
    )
}
export default App