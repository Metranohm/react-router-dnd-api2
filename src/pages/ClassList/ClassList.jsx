import { useState, useEffect } from "react"
import { getClassList } from "../../services/api-calls"

const ClassList = () => {
  const [classes, setClasses] = useState([])

  useEffect(()=> {
    const fetchClassData = async () => {
      const classData = await getClassList()
      setClasses(classData.results)
    }
    fetchClassData()
  })


  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {/** 
						* This is where we map over our results, representing 
						* each with a div containing an image and a name 
					*/}
          {classes.map(classTitle => 
            <div className="class-div" key={classTitle.name}>
              <img 
								style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo"
							/>
              {classTitle.name}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ClassList