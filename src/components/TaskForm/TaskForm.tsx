import useState from 'react'
// import { TaskFormProps } from '../../types'

// {title, description,status,priority}: TaskFormProps

function TaskForm() {

  // const [formData, setFormData] = useState<FormData>({
  //   title: '',
  //   description: '',
  //   status: 'pending',
  //   priority: 'medium'
  // });

  // const handleSubmit = ()=>{

  // }

  return (
    <div>
      <h3>form</h3>

    <form  className="m-4">

      <input type="text" className="border border-red-100 min-w-3xs"/>
      <label htmlFor="messageArea">Description:</label>
      <textarea
        id="messageArea"
        // value={message}
        // onChange={handleTextAreaChange}
        rows={4}
        className="border border-red-100 m-2 min-w-3xs"
      />
      <input type="text" />
      <select name="">
        <option value="">Pending</option>
      </select>
      <select name="">
        <option value="">Medium</option>
      </select>

      <button type="submit">Add Task</button>
    </form>

    </div>
  )
}

export default TaskForm