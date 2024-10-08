import AddToDo from '../components/AddToDo';
import FilterComponent from '../components/FilterComponent';
import ToDoList from '../components/ToDoList';

const Todo = () => {
  return (
    <div>
      <AddToDo />
      <FilterComponent />
      <ToDoList />
    </div>
  );
};

export default Todo;
