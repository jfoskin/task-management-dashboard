// import useState from 'react'
// import { TaskFormProps } from '../../types'

// {title, description,status,priority}: TaskFormProps

function TaskForm() {

  // const [formData, setFormData] = useState<FormData>({
  //   title: '',
  //   description: '',
  //   status: 'pending',
  //   priority: 'medium'
  // });

  return (
    <div>
      <h3>form</h3>

    <form className="m-4">

      <input type="text" className="border border-red-100 min-w-3xs"/>
      <input type="text" className="border border-red-100 m-2 min-w-3xs"/>
      <select name="">
        <option value="">Pending</option>
      </select>
      <select name="">
        <option value="">Medium</option>
      </select>

      <button type="submit">Add Task</button>
      {/* <input type="text" name='title' value={formData.title} />
      <input type="text" name='description' value={formData.description} />
      <select value={formData.status} >
            
            
                    <option key={formData.status} value={formData.status}>
                      {formData.status}
                    </option>
                
      
      
          </select>
      <button type='submit'>Add Task</button> */}
    </form>

    </div>
  )
}

export default TaskForm