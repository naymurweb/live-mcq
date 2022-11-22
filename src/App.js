
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Layout/Main';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>}
  ])
  return (
    <div className="App">

     <RouterProvider router={router}></RouterProvider>
     <Home></Home>
  
    </div>
  );
}

export default App;
