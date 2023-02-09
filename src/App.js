import TodoList from "./TodoList";
import "./App.css"

const App = () => {
  return (
      <div className="container">
        <h1 className="todoText">Todo List</h1>
        <TodoList />
      </div>
  );
}

export default App;