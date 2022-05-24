import React, { useState } from "react";

import "./AddTask.css";

import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleAddTaskClick = () => {
    handleTaskAddition(inputTitle, inputDescription);
    setInputTitle("");
    setInputDescription("");
  };

  return (
    <div className="add-task-container">
      <div className="campo">
        <label>Título: </label>
        <input
          onChange={(e) => setInputTitle(e.target.value)}
          value={inputTitle}
          className="add-task-input"
          type="text"
        />
      </div>

      <div className="campo">
        <label>Descrição: </label>
        <input
          onChange={(e) => setInputDescription(e.target.value)}
          value={inputDescription}
          className="add-task-input"
          type="text"
        />
      </div>

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
