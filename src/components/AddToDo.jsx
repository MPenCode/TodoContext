import { useState } from 'react';
import {useToDo} from '../context/contextToDo';
 
const AddToDo = () => {
    const { setTodos } = useToDo();
    const [todoText, setTodoText] = useState('');
 
  const handleSubmit = e => {
    e.preventDefault();

    if (todoText.trim() === '') {
      alert('Please enter a todo item!');
      return;
    }

    const newId = Date.now();
    const newTodo = { id: newId, text: todoText, completed: false };

    setTodos((prev) => [...prev, newTodo]);
    setTodoText('');
  };
 
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder='Add a new to-do'
        className='flex-1 border rounded px-2 py-1 mr-2'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add
      </button>
    </form>
  );
};
 
export default AddToDo;