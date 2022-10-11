import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = ({ listOfToDos, toggleTodo, deleteToDo }) => {
    // const [showListOfToDos, setShowListOfToDos] = useState(listOfToDos);
    const showListOfToDos = listOfToDos.sort((a, b) =>
        a.done === true && b.done === false ? 1 : -1
    );
    return (
        <div className="list">
            {showListOfToDos.map((toDo, index) => (
                <ToDoCard
                    toDo={toDo}
                    key={index}
                    toggleTodo={toggleTodo}
                    deleteToDo={deleteToDo}
                />
            ))}
        </div>
    );
};

export default ToDoList;
