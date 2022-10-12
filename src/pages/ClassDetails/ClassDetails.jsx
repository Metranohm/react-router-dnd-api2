import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const classDetails = await getDetails(location.state.classTitle.url)
      console.log(classDetails)
      setClassDetails(classDetails)
    }
    fetchDetails()
  }, [location.state.classTitle.url])

  return (
    <>
      <div>
        {classDetails.name ? 
        <>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map(proficiency => 
            <div key={proficiency.index}>{proficiency.name}</div>
          )}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>}
      </div>
    </>
  )
}

export default ClassDetails;