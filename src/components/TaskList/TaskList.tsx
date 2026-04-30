
import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'




function TaskList({tasks, onDelete,}: TaskListProps) {
  
 
  if(tasks.length === 0 ){
    return (
      <div>
      <p>Add a task to the list </p>
      </div>
      )
  }

  return (
    <div>
  <h6>hello</h6>
      {/* mapping each task that has been added to the list */}
      {tasks.map((task) => (
        <TaskItem 
        key={task.id}
        task={task}
        onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList