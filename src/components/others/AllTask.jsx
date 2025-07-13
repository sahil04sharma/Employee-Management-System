import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData]= useContext(AuthContext)
  // console.log(userData.employees)
  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 rounded mt-5  h-55'>
      <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2>Employee Name</h2>
            <h3>New Task</h3>
            <h5>Active Task</h5>
            <h5>Completed</h5>
            <h5>Failed</h5>
        </div>
      <div className='h-[80%] overflow-auto '>
        {userData.map(function(elem,idx){
        return <div key={idx} className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2>{elem.firstName}</h2>
            <h3>{elem.taskSummary.newTask}</h3>
            <h5>{elem.taskSummary.active}</h5>
            <h5>{elem.taskSummary.completed}</h5>
            <h5>{elem.taskSummary.failed}</h5>
        </div>

      })}
      </div>
        
         
    </div>
  )
}

export default AllTask