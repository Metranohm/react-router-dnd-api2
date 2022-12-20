import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ClassList from './pages/ClassList/ClassList';
import ClassDetails from './pages/ClassDetails/ClassDetails';
import MonsterList from './pages/MonsterList/MonsterList';
import SpellSearch from './pages/SpellSearch/SpellSearch';


function App() { // App is a functional component
  return ( // return JSX
    <>
      <NavBar />
      <Routes>
        <Route path="/class-list" element={<ClassList />}/>
        <Route path="/class" element={<ClassDetails />}/>
        <Route path="/moster-list" element={<MonsterList />}/>
        <Route path="/spell-search" element={<SpellSearch />}/>
      </Routes>
    </>
  );
}

export default App;