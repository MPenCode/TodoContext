import { useToDo } from '../context/contextToDo';
import ToDoItem from './ToDoItem';

const ToDosList = () => {
  const { todos, toggleTodo, filter } = useToDo();

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <ToDoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default ToDosList;