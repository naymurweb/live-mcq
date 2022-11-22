import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Startstics from "./Components/Startstics/Startstics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/startstics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Startstics></Startstics>,
        },
        { path: "blog", element: <Blog></Blog> },
        {
          path: "course/:id",
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>,
        },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
