import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log(state);

  const hanldeSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isComplited: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <h1>Add your todo</h1>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border-2 border-black rounded-2xl mx-8 px-3 py-1"
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-purple-600 rounded-2xl text-white font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
