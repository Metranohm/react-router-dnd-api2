import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ClassList from './pages/ClassList/ClassList'
import ClassDetails from './pages/ClassDetails/ClassDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/class-list' 
          element={<ClassList />} 
        />
        <Route 
          path='/class'
          element={<ClassDetails />}
        />
      </Routes>
    </>
  )
}

export default App
