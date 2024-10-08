import {useToDo} from '../context/contextToDo';

const FilterComponent = () => {
    const { dispatch } = useToDo();
   
    return (
      <div className='mb-4 flex space-x-2'>
        <button onClick={() =>
          dispatch({ type: 'filter', payload: "all" })
        } className='bg-gray-200 px-3 py-1 rounded'>
          All
        </button>
        <button onClick={() =>
          dispatch({ type: 'filter', payload: "active" })} className='bg-gray-200 px-3 py-1 rounded'>
          Active
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'filter', payload: "completed" })} 
          className='bg-gray-200 px-3 py-1 rounded'
        >
          Completed
        </button>
      </div>
    );
  };
   
  export default FilterComponent;
