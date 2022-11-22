import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/",loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home></Home> },
        { path: "/home",loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home></Home> },
        {
          path:'course/:id',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz>
        }
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    
  );
}

export default App;
