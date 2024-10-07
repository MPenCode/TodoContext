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
  const [filter, setFilter] = useState('all');

  const initialState = {
    todos: [],
    filter: 'all',
    filteredTodos: [],
  };

    const filterReducer = (state, action) => {
        switch (action.type) {
            case 'SET_FILTER':
                return { ...state, filter: action.payload };
            case 'FILTER_TODOS':
                return { ...state, filteredTodos: state.todos.filter((todo) => {
                    if (state.filter === 'all') return true;
                    if (state.filter === 'active') return !todo.completed;
                    if (state.filter === 'completed') return todo.completed;
                    return true;
                }) };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(filterReducer, { ...initialState, todos });

    useEffect(() => {
        dispatch({ type: 'FILTER_TODOS' });
      }, [state.filter, todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider value={{ todos, setTodos, filter,setFilter,state, dispatch }}>
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
