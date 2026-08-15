import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-5xl font-bold">Tick</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
