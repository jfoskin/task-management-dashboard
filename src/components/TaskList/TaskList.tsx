
import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'

function TaskList({tasks, onDelete, onStatusChange}: TaskListProps) {
 
  if(tasks.length === 0 ){
    return (
      <div>
      <p>Add a task to the list </p>
      </div>
      )
  }

  return (
    <div>
      {tasks.map((task) => {
        <TaskItem 
        key={task.id}
        task={task}
        onDelete={onDelete}
        onStatusChange={onStatusChange}/>
      })}
    </div>
  )
}

export default TaskList