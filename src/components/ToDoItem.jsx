import { useToDo } from '../context/contextToDo';
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TodoItem = ({ todo }) => {
  const { state, dispatch } = useToDo();

  const updateTodoText = (todos, todoId, newText) => {
    return todos.map((t) => (t.id === todoId ? { ...t, text: newText } : t));
  };

  const toggleTodoCompletionStatus = (todos, todoId) => {
    return todos.map((t) =>
      t.id === todoId ? { ...t, completed: !t.completed } : t
    );
  };

  const removeTodo = (todos, todoId) => {
    return todos.filter((e) => e.id !== todoId);
  };

  const updateTodo = (todo) => {
    const newText = prompt('Update todo text:', todo.text);
    if (newText !== null && newText.trim() !== '') {
      const updatedTodos = updateTodoText(state.todos, todo.id, newText);
      dispatch({ type: 'todos', payload: updatedTodos });
    }
  };

  const toggleTodoCompletion = (todo) => {
    const updatedTodos = toggleTodoCompletionStatus(state.todos, todo.id);
    dispatch({ type: 'todos', payload: updatedTodos });
  };

  const deleteTodo = (todo) => {
    const updatedTodos = removeTodo(state.todos, todo.id);
    dispatch({ type: 'todos', payload: updatedTodos });
  };

  return (
    <li
      key={todo.id}
      className="flex items-center justify-between bg-base-100 shadow-md p-4 rounded-lg mb-2"
    >
      <div className="flex items-center">
        <p
          className={`mr-2 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <label className="swap swap-flip text-3xl">
          <input type="checkbox" />
          <FaCheckCircle
            onClick={() => toggleTodoCompletion(todo)}
            className="swap-on text-green-500"
            title="Mark as Incomplete"
            size={20}
          />
          <FaTimesCircle
            onClick={() => toggleTodoCompletion(todo)}
            className="swap-off text-red-500"
            title="Mark as Complete"
            size={20}
          />
        </label>
        <FaEdit
          onClick={() => updateTodo(todo)}
          className="text-blue-500 cursor-pointer"
          title="Edit"
          size={20}
        />
        <FaTrash
          onClick={() => deleteTodo(todo)}
          className="text-red-500 cursor-pointer"
          title="Delete"
          size={20}
        />
      </div>
    </li>
  );
};

export default TodoItem;
