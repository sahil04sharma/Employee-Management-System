import React, {useState,useEffect} from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')

const [newTask, setNewTask] = useState('')

 const [userData,setUserData]= useContext(AuthContext)

// useEffect(() => {
//   console.log("Updated Task:", task);
// }, [task]);



  const handleSubmit =(e)=>{
    e.preventDefault()
    // console.log("Task created")

     setNewTask({
      taskDate,
      taskDescription,
      taskTitle,
      category,
      assignTo,
      active:true,
      newTask:true,
      failed:false,
      completed:false

    })
    // setTask(newTask)

    // console.log(task);

    const data = userData;
    // console.log(data)

    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskSummary.newTask = elem.taskSummary.newTask+1;
        // console.log(elem)
      }
    })
    setUserData(data)
    console.log(data)

  }
  return (
    <div>
         <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={(e)=>{
              handleSubmit(e)

            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input value={taskTitle}
                    onChange={(e)=>{
                      setTaskTitle(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI Design'></input>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={taskDate}
                    onChange={(e)=>{
                      setTaskDate(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>

                   </div>
                   <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input value={assignTo}
                    onChange={(e)=>{
                      setAssignTo(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee Name'></input>

                   </div>
                   <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input value={category}
                    onChange={(e)=>{
                      setCategory(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Design, Dev, etc'></input>
                   </div>
                
                
                  
                 </div>

                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                    onChange={(e)=>{
                      setTaskDescription(e.target.value)
                    }}
                     className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name='' id=''></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

                </div>
               
                
            </form>
        </div>
    </div>
  )
}

export default CreateTask