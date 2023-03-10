import { Link } from 'react-router-dom'
import Navlink from './Navlink'
import hamIcon from '../Images/ham-icon.JPG'
import {useState } from 'react'


function Navbar() {
const [menuBar, setMenuBar] = useState(false);
    return (
      <>
        <div id='icon'><img src={hamIcon} onClick={()=>{ setMenuBar( !menuBar )}} alt='ham-icon' /></div>
            <div id={menuBar ? "navbar mobile-nav" : "navbar"}>          
          <Link to={'/'} style={{textDecoration:'none'}}><Navlink title='Home'/></Link>                                                    
          <Link to={'/bollywood'} style={{textDecoration:'none'}}><Navlink title='Bollywood'/></Link>          
          <Link to={'/technology'} style={{textDecoration:'none'}}><Navlink title='Technology'/></Link>          
          <Link to={'/hollywood'} style={{textDecoration:'none'}}><Navlink title='Hollywood'/></Link>          
          <Link to={'/fitness'} style={{textDecoration:'none'}}><Navlink title='Fitness'/></Link>          
          <Link to={'/science'} style={{textDecoration:'none'}}><Navlink title='Science'/></Link>          
            </div>
            <hr/>
        </>
  )
}

export default Navbar