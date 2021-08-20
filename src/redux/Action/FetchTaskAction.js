import {db} from "../../Config/Firebase"
import { FETCH_TODO_TASK } from "../Types/Types";

export  const FetchTodoAction=()=>async(dispatch)=>{
  try {
    let fetchRes=await db.collection("todoTask").get();
    const productsArray=[];
    fetchRes.forEach(doc => {
       productsArray.push({docId:doc.id,...doc.data()});
       console.log("id",doc.id);
    });
   
    dispatch(
        {
            type:FETCH_TODO_TASK,
            payload:productsArray,
        }
    );
  } catch (error) {
      console.log(error);
      alert(error)
  }
}