import { db } from "../../Config/Firebase"
import { UPDATE_TODO } from "../Types/Types"

export const UpdateTodoAction=(doc,updatedData)=>async(dispatch)=>{
try {
  let updated = await db.collection("todoTask").doc(doc.id).update({
         ...updatedData
   })
   console.log("updated",updated);
   dispatch({
       type:UPDATE_TODO,
       payload:updatedData,
   })
} catch (error) {
    
}
}