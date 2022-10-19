/* eslint-disable react/destructuring-assignment */
// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log(props)
  return (
    <div className="not-container">
      {props.children}
      <GrFormClose className="close" />
    </div>
  )
}
export default Notification
