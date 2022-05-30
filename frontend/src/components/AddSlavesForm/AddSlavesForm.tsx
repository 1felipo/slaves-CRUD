import React, {useContext, useState} from 'react'
import axios from "axios"

import "./AddSlavesForm.css"
import ThemeContext from '../../configuration/theme';
import config from '../../configuration/config';

const AddSlavesForm = () => {
  const theme = useContext(ThemeContext)

  const [slaveName, setSlaveName] = useState("")
  const [slaveDescription, setSlaveDescription] = useState("")

  const postSlave = (slave:{slave:string;description:string}) => {
    axios.post(config.postSlaveEndPoint, slave)
  }

  const handleNameChange = (event:React.FormEvent<HTMLInputElement>) => {
    setSlaveName(event.currentTarget.value)
  }

  const handleDescriptionChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
    setSlaveDescription(event.currentTarget.value)
  }

  const handleSaveSlave = () => {
    postSlave({
      slave:slaveName,
      description:slaveDescription
    })
  }

  return (
    <div className='slavesForm-container'>
        <form className="addslave-form">
            <input type="text" 
            name="slave-title" 
            placeholder="slave name..."
            style={{background:theme.softColor, color:theme.inverseColor}}
            value={slaveName}
            onChange={(event)=>handleNameChange(event)}/>
            <textarea name="slave-description"
            placeholder="slave description..."
            style={{background:theme.softColor, color:theme.inverseColor}}
            value={slaveDescription}
            onChange={(event)=>handleDescriptionChange(event)}></textarea>
            <input type="submit" onClick={handleSaveSlave}/>
        </form>
    </div>
  )
}

export default AddSlavesForm