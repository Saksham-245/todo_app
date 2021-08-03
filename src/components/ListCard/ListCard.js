import React from "react";
import './ListCard.css'

const ListCard = ({title, deleteTodo, editTodo}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    {title}
                    <button className="btn edit" onClick={editTodo}>
                        <i className="bi bi-pencil"/>
                    </button>
                    <button className="btn delete" onClick={deleteTodo}>
                        <i className="bi bi-trash"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;
