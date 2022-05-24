import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  /* axios
    .get(`http://localhost:5000/show_tarefa/${params.taskId}/`)
    .then((res) => {}); */

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskId}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ipsum
          corporis delectus repellendus eveniet voluptatum.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
