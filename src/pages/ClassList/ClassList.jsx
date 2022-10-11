import { useState } from "react"

const ClassList = () => {
  const [classes, setClasses] = useState(['Paladin', 'Rogue', 'Wizard'])
  return (
    <>
      <div>
        <h3>I'm the class list!</h3>
      </div>
    </>
  )
}

export default ClassList