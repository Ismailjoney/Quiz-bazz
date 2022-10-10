import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
      {path:'/',
      loader : ()=> fetch(`https://openapi.programming-hero.com/api/quiz`), 
      element:<Home></Home>},
      
      {path:`/topic`,element:<Topic></Topic>},
      {path:`/blog`,element:<Blog></Blog>},
      {path:`/about`,element:<About></About>}



]}
  ])
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
       
    </div>
  );
}

export default App;
