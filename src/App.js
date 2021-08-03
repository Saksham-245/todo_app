import "./App.css";
import React, { useState} from "react";
import ListCard from "./components/ListCard/ListCard";
import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";

function App() {
    const [text, selectedText] = useState("");
    const [todo, setTodo] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [updated,setUpdated] = useState('');
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    const AddNote = () => {
        if (text === "") {
            alert("Please enter a todo");
        } else {
            todo.push({id: todo.length + 1, text: text})
            setTodo(todo);
            localStorage.setItem("todos", JSON.stringify(todo));
            selectedText("");
        }
    };

    const deleteTodo = (id) => {
        const removeTodo = todo.filter((todo) => {
            return todo.id !== id;
        });
        setTodo(removeTodo);
        localStorage.setItem("todos", JSON.stringify(removeTodo));
    };

    const handleEdit = () => {
        setIsEditing(true);
    }

    function handleUpdateClick(id) {
        const updateTodo = todo.map((todo)=>{
            if(id===todo.id){
                return {...todo,text: updated}
            }
            return todo;
        })
        setTodo(updateTodo);
        setUpdated('')
        setIsEditing(false);
        localStorage.setItem('todos',JSON.stringify(todo));
    }

    return (
        <div className="App">
            <section className="top">
                <h1>Todo</h1>
                {
                    isEditing ? (
                        <div className="update">
                            <input className="form-control" onChange={(e)=>setUpdated(e.target.value)} value={updated}/>
                            <div className="col">
                                <button className="btn btn-success" onClick={handleUpdateClick}>Update</button>
                                {/*<button className="btn btn-danger" onClick={()=>setIsEditing(false)}>Cancel</button>*/}
                            </div>
                        </div>
                    ):(
                        <div className="add-todo">
                            <TextField
                                selectedText={text}
                                handleTextChange={(event) => selectedText(event.target.value)}
                                handeKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        AddNote();
                                    }
                                }}
                            />
                            <Button handleNoteSave={AddNote}/>
                        </div>
                    )
                }
            </section>
            <section>
                <div className="list">
                    {localTodos ?
                        localTodos.map((todo) => {
                            return <ListCard key={todo.id} title={todo.text} deleteTodo={() => deleteTodo(todo.id)}
                                             editTodo={handleEdit}/>
                        }) : (
                            <h2>No todos present</h2>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default App;