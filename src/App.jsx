// import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
 
const App = () => {

 
  return (
    <div className='container mx-auto p-4'>
      <AddToDo />
      <FilterComponent />
      <ToDoList />
      <Footer />
    </div>
  );
};
 
export default App;