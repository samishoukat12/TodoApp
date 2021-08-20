import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchTodoAction } from '../redux/Action/FetchTaskAction'
import { AddTaskAction } from "../redux/Action/AddTaskAction"
import { DeleteTaskAction } from '../redux/Action/DeleteTaskAction'
import { UpdateTodoAction } from '../redux/Action/UpdateTaskAction'
export default function useInputs() {
  const [AddData, setAddData] = useState("")
  // const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [UpdatedIndex, setUpdatedIndex] = useState("")
  const [flag, setflag] = useState(false)
  const [Loading, setLoading] = useState(false)


  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const dispatch = useDispatch()

  const data = useSelector(store => store.TodoReducer.todoTask)
  console.log("data", data);
  useEffect(() => {
    dispatch(FetchTodoAction(setLoading))
  }, [])


  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  const ctahandler = (e) => {
    var t = file.type.split('/').pop().toLowerCase();
    const fileSize = Math.round((file.size / 1024))
    console.log("size", fileSize);
    console.log("type", file.type);
    if (AddData !== "") {
      let newData = {
        task: AddData,
      };
      console.log("new", newData);
      // setData([...data, newData])
      if (t === "jpeg" || t === "jpg" || t === "png" || t === "bmp" || t === "gif") {
        if (fileSize > 0 || fileSize <= 2) {
          dispatch(AddTaskAction(e, file, setFile, setURL, newData, setLoading))
          setAddData("")
          alert("task added successfully")
        }
        else {
          alert("Image Size Must be less than 2MB")
        }
      }
      else {
        alert("Image Type not valid")
      }
    }
    else {
      setError("enter Enter cannot be empty")
    }
  }
  const deleteHandler = (index, DocId) => {
    let newTodoUsers = data.filter((data, i) => {
      if (i !== index) {
        return data;
      }
    });
    dispatch(DeleteTaskAction(DocId, ...newTodoUsers))
    // setData([...newTodoUsers]);

    // console.log("newStudents", newStudents);
  };
  const updateHandler = (items, index) => {
    setUpdatedIndex(index)
    setAddData(items.addData)
    setflag(true)

  }
  const ctaUpdateHandler = () => {
    if (AddData !== "") {
      let newData = {
        addData: AddData,
      };
      let updatedData = data.map((items, index) => {
        if (UpdatedIndex === index) {
          return newData;
        }
        else {
          return items;
        }
      });
      // dispatch(UpdateTodoAction([...updatedData]))
      // setData([...updatedData])
      setAddData("")
      setflag(false)
    }
  }
  return [ctahandler, deleteHandler, updateHandler, ctaUpdateHandler, flag, error, AddData, setAddData, data, Loading, handleChange]
}
