// Write your code here
import './index.css'

const TodoItem = props => {
  const {todos, deleteTodo} = props

  const {id, title} = todos

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="li">
      <p className="p1">{title}</p>
      <div>
        <button type="button" className="btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
