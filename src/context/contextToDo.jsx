import {
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";

const ToDoContext = createContext();

export const TodoProv = ({ children }) => {

  const initialState = {
    todos: [],
    filter: 'all',
    addtext: '',
    changetext: '',
  };

    const filterReducer = (state, action) => {
        switch (action.type) {
            case 'filter':
              return { ...state, filter: action.payload };
            case 'todos':
              return { ...state, todos: action.payload };
            case 'addtext':
              return { ...state, addtext: action.payload };
            case 'changetext':
              return { ...state, changetext: action.payload };
            
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (JSON.stringify(storedTodos) !== JSON.stringify(state.todos)) {
      dispatch({ type: 'todos', payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (JSON.stringify(storedTodos) !== JSON.stringify(state.todos)) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
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
