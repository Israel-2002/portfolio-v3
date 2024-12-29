import Layout from "@/pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home/Home";
import Projects from "@/pages/projects/Projects";
import Contact from "@/pages/contact/Contact";
import About from "@/pages/about/About";

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
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />
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
