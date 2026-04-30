import {useState} from 'react'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'
import type { Task } from '../../types'


const testTasks: Task[] = [
  {
    id: 'task1Id',
      title: 'Task 1',
      description: 'Description 1',
      status: 'pending',
      priority: 'low',
      dueDate: '1/1/11',
  },
  {
    id: 'task2Id',
      title: 'Task 2',
      description: 'Description 2',
      status: 'pending',
      priority: 'low',
      dueDate: '1/1/11',
  },
]

function Dashboard() {

  const [tasks, setTasks] = useState<Task[]>(testTasks)

  // const handleChange = () => {
  //   console.log('first')
  // }

  const handleDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  return (
    <div><h1>Dashboard</h1>

<TaskForm/>
<TaskFilter/>
<TaskList tasks={tasks} onDelete={handleDelete} />



    </div>



  )
}

export default Dashboard