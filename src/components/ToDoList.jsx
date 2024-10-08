import { useToDo } from '../context/contextToDo';
import ToDoItem from './ToDoItem';

const ToDosList = () => {
  const { state } = useToDo();


    const filteredTodos = state.todos.filter((todo) => {
        if (state.filter === 'all') return true;
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <ToDoItem todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default ToDosList;

