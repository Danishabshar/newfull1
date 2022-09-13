import React,{useState} from "react";


const Post=()=>{


    const[todo,setTodo]=useState("")
    const[todos,settodos]=useState([])


    const handle=(e)=>{
        e.preventDefault()
        
        if(todo!==""){
            settodos([...todos,todo])
            setTodo("")
        }



    }






    return(
        <>
     <form  onSubmit={handle} >
     <input  type="text"  value={todo}  onChange={(e)=>setTodo(e.target.value)} size="50"></input>
     <button className="button"  type="submit"  >ADD</button>
     </form>

<br></br>
    
<ul>
     {
        todos.map((val,i)=>{
            return(
            <div key={i} >
                <p>{val}</p>
                <h1>Likes:22</h1>
            </div>
            )
        })
     }
     </ul>
     </> 

    )
}
export default Post;