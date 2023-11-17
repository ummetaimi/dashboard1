
import css from './App.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';

const App = () => {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSideBar = () =>{
    setOpenSidebarToggle (!openSidebarToggle)
  }
  
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSideBar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSideBar}/>
      <Home/>
    </div>
  );
};

export default App;