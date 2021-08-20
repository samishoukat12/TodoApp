import { db ,storage} from "../../Config/Firebase"
import { ADD_TODO_TASK } from "../Types/Types"

export const AddTaskAction=(e,file,setFile,setURL,data,setLoading)=>async(dispatch)=>{
try {
    setLoading(true)
//    await db.collection("todoTask").add(data)
   e.preventDefault();
   const ref = storage.ref(`/images/${file.name}`);
   const uploadTask = ref.put(file);
   uploadTask.on("state_changed", console.log, console.error, () => {
     ref
       .getDownloadURL()
       .then((url) => {
         setFile(null);
         setURL(url);
         db.collection("todoTask").add({...data,image:url});
       });
   });
  
   dispatch({
       payload:data,
       type:ADD_TODO_TASK
   })
} catch (error) {
    console.log(error.message);
}
finally{
    setLoading(false)
}
}