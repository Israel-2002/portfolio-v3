import Layout from "@/pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home/Home";
import Projects from "@/pages/projects/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
