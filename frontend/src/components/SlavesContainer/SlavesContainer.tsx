import axios from 'axios'
import { useEffect, useState } from 'react'

import config from '../../configuration/config'
import SlaveCard from '../SlaveCard/SlaveCard';
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
  },[slaves])

  return (
    <div className="slaves-container-container">
      {
        slaves?.map((slave,i)=>{
          return(
            <SlaveCard 
            slaveId={slave._id}
            slaveName={slave.slave}
            slaveDescription={slave.description}
            slaveStatus={slave.status}
            key={i}/>
          )
        })
      }
    </div>
  )
}

export default SlavesContainer