import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div id='tasklist' className='h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 overflow-x-auto flex-nowrap'>

        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <CompleteTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>

            }
            if(e.failed){
                return <FailedTask key={idx}  data={e}/>
            }
        })}

       {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}

        
       
        


    </div>
  )
}

export default TaskList