import { useState, useEffect } from 'react'
import { getClassList } from '../../services/api-calls'
// Don't forget this import!
import { Link } from 'react-router-dom'

const ClassList = () => { // ClassList is a functional component
  const [classes, setClasses] = useState([]) // set initial state to empty array

  useEffect(() => {                     // useEffect is a hook that runs after the component renders
    const fetchClassList = async () => {    // async function to fetch class list
      const classData = await getClassList()    // await the response from the API call
      setClasses(classData.results)        // set the state to the results of the API call
    }
    fetchClassList()            // call the async function
  }, [])                  // empty array as second argument to useEffect means it only runs once

  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {classes.map(classTitle =>
            // Wrap the div containing the class 'card' in a <Link>
						// Also, make sure to move the key to the <Link>
            <Link key={classTitle.index} state={{ classTitle }} to='/class'>
              <div className="class-div">
                <img 
                  style={{ width: "100px", height: "100px" }}
                  src={`/images/${classTitle.name}.svg`} 
                  alt="class-logo"
                />
                {classTitle.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default ClassList;