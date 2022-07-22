import { Button } from "@material-ui/core";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styles from "./css/styles.module.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">This is content</div>
        <div className="modal-footer">
          <Button>Close</Button>
        </div>
      </div>
    </div>
  );
};

export function CreateClick(state = Modal) {
  return state;
}

function App() {
  let text = "";
  let todos = new Map();
  todos.set(1, text);
  return (
    <div className={styles.main_block}>
      <h1 className={styles.text}>To Do List</h1>

      <div className={styles.sort_block}>
        <Button onClick={CreateClick} startIcon={<AddIcon />}>
          Create
        </Button>
        <Button startIcon={<SortByAlphaIcon />}>Sort</Button>
      </div>

      <div className={styles.content_block}>
        <div className={styles.todo_block}></div>
        <Button startIcon={<CreateIcon />}>Edit</Button>
        <Button startIcon={<DeleteIcon />}>Remove</Button>
      </div>
      <div className={styles.content_block}>
        <div className={styles.todo_block}>
          <p></p>
        </div>
        <Button startIcon={<CreateIcon />}>Edit</Button>
        <Button startIcon={<DeleteIcon />}>Remove</Button>
      </div>
    </div>
  );
}

export default App;
