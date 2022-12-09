import { useState } from "react";

const ClassList = () => {
  const [classes, setClasses] = useState(['Paladin', 'Bard', 'Rogue'])
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
            <div className="class-div" key={classTitle}>
              <img 
								style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle}.svg`} 
								alt="class-logo"
							/>
              {classTitle}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
 
export default ClassList;