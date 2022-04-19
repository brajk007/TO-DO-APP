import React,{useState} from 'react'
import  stl from './Task.module.css'

const Single = ({task,des,date,id,deleteHandler}) => {
    const [ischeck,setIsCheck] = useState(false);
    const [isDueDate,setIsDueDate] =useState(false)
    const checkHandler=()=>{
       setIsCheck(!ischeck)
    }
    const dateHandler=(e)=>{
       const selDate = new Date( e.target.value);
       console.log(selDate.getTime());
      const currDate = new Date().getTime()
      if(currDate>selDate){
        setIsDueDate(!isDueDate)
        console.log("due date is passed");
      }
    }
  return (
      <>
         <tr className={ischeck?stl.done:stl.item} key={id}>
                        <td> {id+1} </td>
                        <td>{task} {isDueDate?<p style={{color:'red',fontSize:'12px'}}> You missed !! Due date is passed </p>:<></>}</td> 
                        <td>{des}</td>
                        <td><input type="date" name="date" placeholder='task description' style={{padding:'4px',width:'150px'}} className="mt-1"
                         onChange={dateHandler}
                        /><br/> {date} </td>
                        <td> <input type="checkbox" className="p-2" onClick={checkHandler}/> </td>
                        <button className='btn-danger pt-0 mt-1' style={{height:'30px',color:'light-grey'}} onClick={()=>deleteHandler(id)}> Delete </button>
                      </tr>
      </>
  )
}

export default Single;
