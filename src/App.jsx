import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
 
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
 
  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
 
  return (
    <div className='container mx-auto p-4'>
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};
 
export default App;