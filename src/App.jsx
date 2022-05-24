import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list_tarefas")
      .then((res) => {
        setTasks(res.data);
      })
      .catch(() => {
        console.log("deu erro");
      });
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        axios.patch(
          `http://localhost:5000/update_tarefa/${taskId}`,
          updatedTask
        );
        return { ...task, completed: !task.completed };
      }

      return task;
    });
  };

  const handleTaskAddition = (taskTitle, taskDescription) => {
    const newTask = {
      title: taskTitle,
      content: taskDescription,
      completed: false,
    };
    axios
      .post("http://localhost:5000/create_tarefa", newTask)
      .then(() => {
        console.log("Criado!");
      })
      .catch(() => {
        console.log("Deu erro!");
      });
  };

  const handleTaskDeletion = (taskId) => {
    axios.delete(`http://localhost:5000/delete_tarefa/${taskId}`);
    //const newTasks = tasks.filter((task) => task.id !== taskId);
    //setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskId" component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
