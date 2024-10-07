import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const ToDoContext = createContext();

export const TodoProv = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
//   const [filter, setFilter] = useState("all");

  const initialState = {
    filter: "all",
    filteredTodos: true,
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return { ...state, filter: action.payload };
      case "all":
        return { ...state, filteredTodos: todos.filter(todo => todo)};
        case "active":
        return { ...state, filteredTodos: todos.filter(todo => !todo.completed)};
        case "completed":
        return { ...state, filteredTodos: todos.filter(todo => todo.completed) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    todos,
  });

  useEffect(() => {
    dispatch({ type: "FILTER_TODOS" });
  }, [state.filter, todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider
      value={{ todos, setTodos, state, dispatch }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodosProvider");
  }

  return context;
};
