import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RootLayout from "./layout/RootLayout";
import { ProjectsArr } from "./pages";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="tasks" element={<Projects />} />
        {
          ProjectsArr.map((project, idx) => {
            const Task = project.task;
            return <Route key={idx} path={project.title} element={<Task />} />;
          })
        }
      </Route>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;