import React from 'react'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'

function Dashboard() {
  return (
    <div><h1>Dashboard</h1>

<TaskForm/>
<TaskFilter/>
<TaskList/>



    </div>



  )
}

export default Dashboard