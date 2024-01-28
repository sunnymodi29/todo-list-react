import { useState } from "react";

const TodoList = () => {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        {
            input !== "" && setTodos((todos) =>
                todos.concat({
                    text: input,
                    id: Math.floor(Math.random() * 10),
                })
            )
        }

        setInput("");
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    }

    return (
        <>
            <div className='container'>
                <input type='text' placeholder="Todo" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>

                <div className="todos-section">
                    <ul className="todos-list">
                        {todos.map(({ text, id }) => {
                            return (
                                <li key={id} className="todo">
                                    <span>{text}</span>
                                    <button className="close" onClick={() => removeTodo(id)}>X</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList