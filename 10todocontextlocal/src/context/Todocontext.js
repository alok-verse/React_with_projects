import React from "react";
import { createContext } from "react";

const Todocontext =React.createContext({
    todos: [
        {
            id:1,
            todo:" Todo message",
            completed: false,
        }
    ],
    addTodo : (todo)=>{},
    updatedTodo: (id, todo)=>{},
    deletetodo : (id)=>{},
    togglecomplete :(id)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext);
};

export  default Todocontext;