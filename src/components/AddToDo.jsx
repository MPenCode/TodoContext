import {useToDo} from '../context/contextToDo';
 
const AddToDo = () => {
    const { state,dispatch } = useToDo();
 
  const handleSubmit = e => {
    e.preventDefault();

    if (state.addtext.trim() === '') {
      alert('Please enter a todo item!');
      return;
    }

    const newId = Date.now();
    const newTodo = { id: newId, text: state.addtext, completed: false };

    dispatch({ type: 'todos', payload: [...state.todos, newTodo] });
    dispatch({ type: 'addtext', payload: newTodo });
  };
 
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        value={state.addtext}
        onChange={e => dispatch({ type: 'addtext', payload: e.target.value })}
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