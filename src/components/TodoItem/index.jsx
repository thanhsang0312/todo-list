import React from "react";
import Form from "../Form";
import Button, {
  StyledBtnDelete,
  StyledBtnDone,
  StyledBtnEdit,
} from "../Button";
import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: ${(props) =>
    props.isDone ? props.theme.bgGrey : props.theme.bgWhite};

  .todo-action {
    display: flex;
    gap: 10px;
  }
`;

const StyledTodoLabel = styled.label`
  flex: 1;
  font-size: 20px;
  text-align: left;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  color: ${(props) => (props.isDone ? "white" : "black")};
  /* color: #000; */
`;

const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleDoneTodo,
  handleEditMode,
  handleEditTodo,
  ...restProps
}) => {
  const { id, label, isDone, isEditting } = todo;
  return (
    <StyledTodoItem
      isDone={isDone}
      className={`todo-item ${isDone ? "done" : ""}`}
      {...restProps}
    >
      {isEditting ? (
        <Form
          value={label}
          btnText="Save"
          handleSubmit={(editedLabel) => handleEditTodo?.(id, editedLabel)}
        />
      ) : (
        <>
          <StyledTodoLabel isDone={isDone} className="todo-label">
            {label}
          </StyledTodoLabel>
          <div className="todo-action">
            <StyledBtnDelete
              className="btn-delete"
              onClick={() => handleDeleteTodo?.(id)}
            >
              Delete
            </StyledBtnDelete>
            {!isDone && (
              <StyledBtnEdit
                className="btn-edit"
                onClick={() => handleEditMode?.(id)}
              >
                Edit
              </StyledBtnEdit>
            )}
            <StyledBtnDone
              isDone={isDone}
              className="btn-done"
              onClick={() => handleDoneTodo?.(id)}
            >
              {isDone ? "Undone" : "Done"}
            </StyledBtnDone>
          </div>
        </>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;
