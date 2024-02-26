import React, { useState, useEffect } from "react";
import Form from "../Form";
import TodoItem from "../TodoItem";
import axios from "axios";
import styled from "styled-components";

const LOCAL_TODOS = "todos";

const StyleContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  .title {
    text-align: center;
  }
`;

const StyleTodoList = styled.ul`
  min-height: 200px;
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

const StyleLoading = styled.div`
  height: 100%;
  border-radius: 8px;
  background: black;
  cursor: not-allowed;
  opacity: 0.5;
  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const TodoContainer = () => {
  const [todos, setTodos] = useState([]); //Dynamic variable
  const [loading, setLoading] = useState(false);

  const queryTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://65092931f6553137159b0494.mockapi.io/todos"
      );

      console.log("res", res);
      if (res?.data) {
        setTodos(res?.data.reverse());
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    queryTodos?.();
  }, []);

  const handleAddTodo = async (newLabel) => {
    if (!newLabel) return;
    const newTodo = {
      label: newLabel || "",
      isDone: false,
    };
    setLoading(true);
    try {
      const res = await axios.post(
        "https://65092931f6553137159b0494.mockapi.io/todos",
        newTodo
      );
      console.log("res", res);
      if (res.data) {
        setTodos((prev) => [res.data, ...prev]);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }

    // setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const handleDeleteTodo = async (deletedId) => {
    if (!deletedId) return;

    setLoading(true);
    try {
      const res = await axios.delete(
        `https://65092931f6553137159b0494.mockapi.io/todos/${deletedId}`
      );
      if (res.data) {
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== deletedId)
        );
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDoneTodo = async (doneId) => {
    if (!doneId) return;

    setLoading(true);
    try {
      const changedTodo = todos.find((todo) => todo.id === doneId) || {};
      const payload = { isDone: !!!changedTodo.isDone };
      console.log("payload", payload);
      const res = await axios.put(
        `https://65092931f6553137159b0494.mockapi.io/todos/${doneId}`,
        payload
      );
      if (res.data) {
        console.log("res", res.data);
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === doneId ? res.data : todo))
        );
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditMode = async (editedId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === editedId ? { ...todo, isEditting: true } : todo;
      })
    );
  };

  const handleEditTodo = async (editedId, edittedLabel) => {
    if (!editedId || !edittedLabel) return;

    setLoading(true);
    try {
      const payload = { label: edittedLabel };
      const res = await axios.put(
        `https://65092931f6553137159b0494.mockapi.io/todos/${editedId}`,
        payload
      );
      if (res.data) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === res.data.id ? res.data : todo))
        );
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const TodoItemActionsProps = {
    handleDeleteTodo,
    handleDoneTodo,
    handleEditMode,
    handleEditTodo,
  };

  return (
    <StyleContainer className="container">
      <h1 className="title">Todo List</h1>
      <Form btnText="Add" handleSubmit={handleAddTodo} />
      <StyleTodoList className="todo-list" id="todoList">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id || index}
              todo={todo}
              {...TodoItemActionsProps}
            />
          );
        })}
      </StyleTodoList>
      {loading && <StyleLoading className="loading"></StyleLoading>}
    </StyleContainer>
  );
};

export default TodoContainer;
