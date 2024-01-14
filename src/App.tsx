import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="px-40 py-20">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
