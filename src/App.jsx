import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { useToDo } from './context/contextToDo';
 
const App = () => {
  const {setFilter} = useToDo();
 
  return (
    <div className='container mx-auto p-4'>
      <AddToDo />
      <FilterComponent setFilter={setFilter} />
      <ToDoList />
    </div>
  );
};
 
export default App;