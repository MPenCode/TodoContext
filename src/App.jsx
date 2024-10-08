import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Todo from './pages/Todo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hero from './pages/Hero';
 
const App = () => {

 
  return (
    <BrowserRouter>
    <div className='container mx-auto p-4'>
      <NavBar />
      <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/todos' element={<Todo />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
};
 
export default App;