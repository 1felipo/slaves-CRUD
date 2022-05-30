import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'

import config from '../../configuration/config'
import ThemeContext from '../../configuration/theme';
import "./SlavesContainer.css"

const SlavesContainer = () => {

  const [slaves, setSlaves] = useState<{description:string;slave:string;status:boolean;__v:string;_id:string}[]>()
  const [slaveNameEdit, setSlaveNameEdit] = useState("")
  const [slaveDescriptionEdit, setSlaveDescriptionEdit] = useState("")

  const getSlaves = () => {
    axios.get(config.getSlavesEndPoint)
    .then(res => {
        setSlaves(res.data);
      })
  }

  useEffect(()=>{
    getSlaves()
  },[])

  const deleteSlave = async (id:string) => {
    await axios.delete(config.deleteSlaveEndPoint+id)
  }

  const putSlaveStatus = (id:string) => {
    axios.put(config.putSlaveStatusEndPoint+id)
  }

  const putSlaveEdit = (id:string) => {
    alert("En desarrollo")
  }

  const theme = useContext(ThemeContext)

  return (
    <div className="slaves-container-container">
      {
        slaves?.map((slave,i)=>{
          return(
            <>
            <div className='slave-container-main' 
            key={i}
            style={{background:theme.softColor}}>

              <div className="slave-data">
                <h3 style={{color:theme.inverseColor}}>{slave.slave}</h3>
                <p style={{color:theme.inverseColor}}>{slave.description}</p>
              </div>

              <div className="slave-controllers">
                <button onClick={()=>deleteSlave(slave._id)}>
                  Delete
                </button>
                <button 
                style={slave.status?{background:"#36AE7C"}:{background:"#F32424"}}
                onClick={()=>putSlaveStatus(slave._id)}>
                  Sold?
                </button>
                <button onClick={()=>putSlaveEdit(slave._id)}>
                  Edit
                </button>
              </div>
            </div>
            <div className="edit-slave-container" style={{background:theme.softColor}}>
              <input style={{background:theme.softColor}}
              value={slave.slave}/>
              <textarea style={{background:theme.softColor}}
              value={slave.description}></textarea>
              <button>Edit</button>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default SlavesContainer