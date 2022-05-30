import axios from 'axios'
import { useEffect, useState } from 'react'

import config from '../../configuration/config'

const SlavesContainer = () => {

  const [slaves, setSlaves] = useState([])

  const getSlaves = async () => {
    axios.get(config.slavesEndPoint)
    .then(res => {
        setSlaves(res.data);
      })
  }

  useEffect(()=>{
    getSlaves()
  },[])

  console.log(slaves)

  return (
    <div className="slavescontainer-container">

    </div>
  )
}

export default SlavesContainer