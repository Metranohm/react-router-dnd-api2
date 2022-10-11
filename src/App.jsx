import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ClassList from './pages/ClassList/ClassList'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/class-list' element={<ClassList />} />
      </Routes>
    </>
  )
}

export default App
