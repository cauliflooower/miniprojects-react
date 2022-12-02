import c from "./TodoForm.module.css"
import { useState } from "react";

function TodoForm({ saveTodo }) {
    const [value, setValue] = useState('');

    return (
        <div className={c.app}>
            <form className={c.form}
                onSubmit={e => {
                    e.preventDefault();
                    saveTodo(value);
                    setValue('')
                }}>
                <input className={c.form__input} onChange={e => setValue(e.target.value)} value={value} type="text" placeholder="Add todo" />
            </form>
        </div>
    );
}

export default TodoForm;

