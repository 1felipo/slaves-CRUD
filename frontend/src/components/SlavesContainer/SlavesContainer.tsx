import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'

import config from '../../configuration/config'
import ThemeContext from '../../configuration/theme';
import "./SlavesContainer.css"

const SlavesContainer = () => {

  const [slaves, setSlaves] = useState<{description:string;slave:string;status:boolean;__v:string;_id:string}[]>()

  const getSlaves = () => {
    axios.get(config.getSlavesEndPoint)
    .then(res => {
        setSlaves(res.data);
      })
  }

  useEffect(()=>{
    getSlaves()
  },[])

  const deleteSlave = (id:string) => {
    axios.delete(config.deleteSlaveEndPoint+id)
    window.location.reload()
  }

  const putSlaveStatus = (id:string) => {
    axios.put(config.putSlaveStatusEndPoint+id)
    window.location.reload()
  }

  const theme = useContext(ThemeContext)

  return (
    <div className="slaves-container-container">
      {
        slaves?.map((slave,i)=>{
          return(
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
                <button>Edit</button>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}

export default SlavesContainer