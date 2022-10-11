import React from "react";
import deleteIcon from "./trash.png";
const ToDoCard = ({ toDo, toggleTodo, deleteToDo }) => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <input
                    type="checkbox"
                    onChange={() => toggleTodo(toDo.id)}
                    checked={toDo.done}
                />
                <span
                    className={`card__content ${
                        toDo.done && "card__content--checked"
                    }`}
                >
                    {toDo.content}
                </span>
            </div>

            <button
                className="card__delete-button"
                onClick={() => deleteToDo(toDo.id)}
            >
                <img src={deleteIcon} alt="" />
            </button>
        </div>
    );
};

export default ToDoCard;
