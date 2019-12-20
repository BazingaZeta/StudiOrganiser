import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
var columnsFromBackend = {
  [uuid()]: {
    name: "Todo",
    items: []
  }
};
const Dropzone2 = ({ tasks }) => {
  // const [columns, setColumns] = useState(columnsFromBackend);
  // const [tasksToBoard, setTasksToBoard] = useState(tasks);

  useEffect(() => {
    columnsFromBackend = {
      [uuid()]: {
        name: "Todo",
        items: tasks
      }
    };
  });

  console.log(columnsFromBackend);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => console.log(result)}
      ></DragDropContext>
    </div>
  );
};

export default Dropzone2;
