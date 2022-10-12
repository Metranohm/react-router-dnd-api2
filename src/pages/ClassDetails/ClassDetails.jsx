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
    }
    fetchDetails()
  },[])

  return (
    <>
      <div>
        <h3>Class Details</h3>
      </div>
    </>
  )
}

export default ClassDetails;