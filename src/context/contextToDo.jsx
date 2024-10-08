import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  // useState,
} from "react";

const ToDoContext = createContext();

export const TodoProv = ({ children }) => {
  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  // const [filter, setFilter] = useState('all');

  const initialState = {
    todos: [],
    filter: 'all',
    addtext: '',
    toggletodo: null,
  };

    const filterReducer = (state, action) => {
        switch (action.type) {
            case 'filter':
              return { ...state, filter: action.payload };
            case 'todos':
              return { ...state, todos: action.payload };
            case 'addtext':
              return { ...state, addtext: action.payload };
            case 'toggletodo':
              return { ...state, toggletodo: action.payload };
            
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
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
