
import React, { useState } from 'react'
import Single from './Single'

const Task = () => {
    const [task,setTask] = useState({
        task:'',
        des:'',
    })
    const [list,setList] = useState([])
  

    const changeHandler=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
    }
   const taskHandler=()=>{
   if (task.task && task.des){
    setList([...list,{...task}])
    setTask({ task:'', des:''})
    }
    else{
      alert("Enter Task and description")
    }
   }
   const deleteHandler=(i)=>{
      list.splice(i,1)
      setList([...list])
   }
  
   console.log(list);
  return (
      <>
      <div className='row'>
        <div className='col-md-4 offset-4 mt-5'>
            <input type="text" name="task" placeholder='Enter task' style={{padding:'4px'}} className="mt-5" onChange={changeHandler} value={task.task}/><br/>
            <input type="text" name="des" placeholder='task description' style={{padding:'4px'}} className="mt-1" onChange={changeHandler} value={task.des}/><br/>
            <button className='btn btn-primary mt-2' style={{padding:'5px',marginLeft:'20px'}} onClick={taskHandler}>Add Task</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-3'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Task No</th>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col">date of completion</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
         {
             list.map((ele,i)=>{
            
               return(
                   <>
                   
                    <Single key={i} {...ele} id={i} deleteHandler={deleteHandler}/>
                     
                   </>
               )
             })
         }
  </tbody>
</table>
        </div>
      </div>
      </> 
  )
}

export default Task;
