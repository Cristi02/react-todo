import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const InputToDo = ({ addToDo }) => {
    const inputRef = useRef(null);

    const addToListNewTodo = () => {
        const newToDoCotent = inputRef.current.value;
        if (newToDoCotent)
            addToDo({
                id: uuidv4(),
                content: newToDoCotent,
                done: false,
            });
        inputRef.current.value = "";
    };

    const keyDownHandler = (event) => {
        if (event.key === "Enter") {
            addToListNewTodo();
        }
    };

    return (
        <>
            <div className="add-new-todo">
                <input
                    className="add-new-todo__input"
                    type="text"
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={keyDownHandler}
                />
                <button
                    className="add-new-todo__button"
                    onClick={addToListNewTodo}
                >
                    Add To List
                </button>
            </div>
        </>
    );
};

export default InputToDo;
