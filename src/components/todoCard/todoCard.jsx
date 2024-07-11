import axios from "axios";
import React, { useRef, useState } from "react";
import "./todoCard.css";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/todo/todoSlice";
import { setLoading } from "../../features/loader/loaderSlice";

const TodoCard = ({ todo }) => {
  const isLoading = useSelector(state=>state.loader.loading)
  const dispatch = useDispatch();
  // todo adiing date
  const formattedDate = format(new Date(todo.createdAt), "MMMM d, yyyy");
  // for conditional render for edit
  const [edit, setEdit] = useState(false);
  // check box conditions check
  const [check, setCheck] = useState(todo.completed);
  // to  update the todo value
  const [updatedTodo, setUpdateTodo] = useState(todo.todo);

  // to get input value
  const updateRef = useRef();
  // function for delete
  const handleDelete = async () => {
    alert("Deleted");
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/todos/${todo._id}`, {
        withCredentials: true,
      });
      // filter with id and create new array with out the same id item
      dispatch(deleteTodo(todo._id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  // handle edit input show with conditional render. if this true show the edit input
  const handleEditInput = () => {
    // set value true
    setEdit(true);
  };
  // to store changble value in updatetodo
  const handleChange = async () => {
    // get the input value form ref
    const updatedValue = updateRef.current.value;
    // set value to setUpdateTodo
    setUpdateTodo(updatedValue);
  };
  // handle edit function run when changed data submit
  const handleEdit = async () => {
    dispatch(setLoading(true))
    // save changed todo in variable
    const data = {
      todo: updatedTodo,
      completed : check
    };
    try {
      // fetch update api and pass data as req.body
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/todos/${todo._id}`,
        data,
        { withCredentials: true }
      );
      // settodos and map. and compare todo id with updated item
      dispatch(
        updateTodo({
          _id: todo._id,
          updatedTodo,
        })
      );
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      console.error("Error updating todo:", error);
    }
    setEdit(false);
  };
  const handleCheckboxChange = async (event) => {
    const completed = event.target.checked;
    setCheck(completed);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/todos/${todo._id}`,
        { todo: updatedTodo, completed },
        { withCredentials: true }
      );
      dispatch(updateTodo(response.data));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="flex about-card flex-col justify-between h-full bg-white shadow-lg rounded-lg p-4 mt-4 border border-gray-200 relative">
      <span
        className={`text-lg break-words font-semibold ${
          check ? "line-through" : ""
        }`}
      >
        {updatedTodo}
      </span>

      <div className="flex justify-between items-center mt-2">
        <p className="home-p p-2 text-sm">{formattedDate}</p>
        <input
          type="checkbox"
          checked={check}
          onChange={handleCheckboxChange}
        />
        <div>
          <i
            className="fa-solid fa-trash cursor-pointer   hover:text-red-500 mr-4"
            onClick={handleDelete}
          ></i>
          <i
            className="fa-solid fa-pen-to-square  cursor-pointer hover:text-blue-500"
            onClick={handleEditInput}
          ></i>
        </div>
      </div>
      {edit && (
        isLoading ?
        <div className="loader"></div>
        :
        <div className="edit-box flex flex-col justify-center items-center gap-2 h-full  bg-white shadow-lg rounded-lg p-4">
          <input
            type="text"
            ref={updateRef}
            defaultValue={updatedTodo}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <i className="fa-solid fa-square-check" onClick={handleEdit}></i>
        </div>

      )}
    </div>
  );
};

export default TodoCard;
