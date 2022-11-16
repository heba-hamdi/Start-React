import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Header from './components/Header/Header';
import Portofolio from './components/Portofolio/Portofolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';


function App() {

  let router = createBrowserRouter([
    { path: '/', element:<Layout/> , children:[
       {path:'portofolio', element:<Portofolio/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>}
    ] }
  ])

  return (

    <>
      <RouterProvider router={router}/>  
    </>
  );
}

export default App;
