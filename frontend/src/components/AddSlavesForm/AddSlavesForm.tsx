import React, {useContext} from 'react'

import "./AddSlavesForm.css"
import ThemeContext from '../../configuration/theme';

const AddSlavesForm = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className='slavesForm-container'>
        <form className="addslave-form">
            <input type="text" 
            name="slave-title" 
            placeholder="slave name..."
            style={{background:theme.softColor, color:theme.inverseColor}}/>
            <textarea name="slave-description"
            placeholder="slave description..."
            style={{background:theme.softColor, color:theme.inverseColor}}></textarea>
            <input type="submit" />
        </form>
    </div>
  )
}

export default AddSlavesForm