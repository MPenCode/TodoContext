import {useToDo} from '../context/contextToDo';

const FilterComponent = () => {
    const { state, dispatch } = useToDo();
   
    return (
      <div className='mb-4 flex space-x-2'>
        <button onClick={() => dispatch({ type: 'all'})} className='bg-gray-200 px-3 py-1 rounded'>
          All
        </button>
        <button onClick={() => dispatch({ type: 'active'})} className='bg-gray-200 px-3 py-1 rounded'>
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'completed' })}
          className='bg-gray-200 px-3 py-1 rounded'
        >
          Completed
        </button>
      </div>
    );
  };
   
  export default FilterComponent;

