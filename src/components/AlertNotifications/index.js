// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessContainer = () => (
    <Notification>
      <div className="success-container">
        <div className="success-inner">
          <AiFillCheckCircle className="success icon" />
          <div className="icon-container">
            <h1 className="success text">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const renderErrorContainer = () => (
    <Notification>
      <div className="success-container">
        <div className="success-inner">
          <RiErrorWarningFill className="error icon" />
          <div className="icon-container">
            <h1 className="error text">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const renderWarningContainer = () => (
    <Notification>
      <div className="success-container">
        <div className="success-inner">
          <MdWarning className="warning icon" />
          <div className="icon-container">
            <h1 className="warning text">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const renderInfoContainer = () => (
    <Notification>
      <div className="success-container">
        <div className="success-inner">
          <MdInfo className="info icon" />
          <div className="icon-container">
            <h1 className="info text">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <h1 className="header">Alert Notifications</h1>
      {renderSuccessContainer()}
      {renderErrorContainer()}
      {renderWarningContainer()}
      {renderInfoContainer()}
    </div>
  )
}
export default AlertNotifications
