import "./App.css";
import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import InputToDo from "./InputToDo";

function App() {
    const savedToDoList = JSON.parse(localStorage.getItem("listOfToDos"));
    const defaultValue = savedToDoList ?? [];
    const [listOfToDos, setListOfToDos] = useState(defaultValue);

    useEffect(() => {
        localStorage.setItem("listOfToDos", JSON.stringify(listOfToDos));
    }, [listOfToDos]);

    const addToDo = (newToDo) => {
        setListOfToDos((listOfToDos) => [...listOfToDos, newToDo]);
    };

    const toggleTodo = (id) => {
        setListOfToDos((listOfToDos) =>
            listOfToDos.map((toDo) => {
                if (toDo.id === id) return { ...toDo, done: !toDo.done };
                return { ...toDo };
            })
        );
    };

    const deleteToDo = (id) => {
        setListOfToDos((listOfToDos) =>
            listOfToDos.filter((toDo) => toDo.id !== id)
        );
    };

    return (
        <div className="app">
            <InputToDo addToDo={addToDo} />
            <ToDoList
                listOfToDos={listOfToDos}
                toggleTodo={toggleTodo}
                deleteToDo={deleteToDo}
            />
        </div>
    );
}

export default App;
