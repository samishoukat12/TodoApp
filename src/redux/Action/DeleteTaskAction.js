import { db } from "../../Config/Firebase"
import { DELETE_TODO } from "../Types/Types"

export const DeleteTaskAction=(DocId,...newTodoUsers)=>async(dispatch)=>{
try {
    await db.collection("todoTask").doc(DocId).delete(...newTodoUsers)
    dispatch({
        payload:DocId,
        type:DELETE_TODO
    })
} catch (error) {
    
}
}