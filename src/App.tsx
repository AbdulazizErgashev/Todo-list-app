import { TodoProvider } from "./context/TodoContext";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
}

export default App;
