import './App.css';
import Layout from './components/shared/layout';
import { Route, Routes } from "react-router-dom";
import AllTasks from "./pages/allTasks";
import CreateTask from "./pages/createTask";
import CompleteTask from "./pages/completeTask";
import DeleteTask from "./pages/deleteTask";


function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<AllTasks />}></Route>
        <Route path="/create-task" element={<CreateTask />}></Route>
        <Route path="/complete-task/:id" element={<CompleteTask />}></Route>
        <Route path="/delete-task/:id" element={<DeleteTask />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
