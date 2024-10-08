// import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
// import { useToDo } from './context/contextToDo';
 
const App = () => {
 
  return (
    <div className='container mx-auto p-4'>
      <AddToDo />
      <FilterComponent />
      <ToDoList />
    </div>
  );
};
 
export default App;