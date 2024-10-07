import {useToDo} from '../context/contextToDo';

const FilterComponent = () => {
    const { setFilter } = useToDo();
   
    return (
      <div className='mb-4 flex space-x-2'>
        <button onClick={() => setFilter('all')} className='bg-gray-200 px-3 py-1 rounded'>
          All
        </button>
        <button onClick={() => setFilter('active')} className='bg-gray-200 px-3 py-1 rounded'>
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className='bg-gray-200 px-3 py-1 rounded'
        >
          Completed
        </button>
      </div>
    );
  };
   
  export default FilterComponent;
