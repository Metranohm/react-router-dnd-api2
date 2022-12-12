import { useEffect, useState } from "react";
import { getMonsterList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([]) // set initial state to empty array

  useEffect(()  => {      // useEffect is a hook that runs after the component renders
    const fetchMonsterList = async () => { // async function to fetch monster list
      const monsterData = await getMonsterList()  /// await the response from the API call
      setMonsterList(monsterData.results) // set the state to the results of the API call
    }
    fetchMonsterList() // call the async function
  }, []) // empty array as second argument to useEffect means it only runs once
  
  return ( // return JSX
    <>
      <h3>Monster List (OMG SCARY)</h3> 
      {monsterList.length ? // ternary operator to check if monsterList has length
      <>
        {monsterList.map(monster => // map over the monsterList array
          <div key={monster.index}>
            <Link to="/monster" state={{monster}}>{monster.name}</Link>
            <br/>
          </div>
        )}
      </>
      :
      <>
        <h4>Loading scary monsters...</h4>
      </>
      }
    </>
  )
}

export default MonsterList;