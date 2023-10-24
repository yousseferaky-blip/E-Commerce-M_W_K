import { Link, NavLink } from 'react-router-dom'
import   './NavBar.css'
import { useState ,useEffect } from 'react'

const NavBar = ({cart}) => {

    const [Mobil,setMobil] = useState(false)
// Dark Mode
const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isUserPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isUserPrefersDarkMode);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
        root.style.setProperty("--primary", "#121212");
        root.style.setProperty("--secondary", "#90caf9");
        root.style.setProperty("--black", "#FFCC80 ");
        root.style.setProperty("--white", "#0D47A1 ");
        root.style.setProperty("--background", "#121212");
        root.style.setProperty("--border", "#424242");
        root.style.setProperty("--icon", "#c5c5c5");
      } else {
      root.style.setProperty("--primary", "#0074D9");
      root.style.setProperty("--secondary", "#1E88E5");
      root.style.setProperty("--black", "#AED6F1");
      root.style.setProperty("--white", "#64B5F6");
      root.style.setProperty("--background", "#2196F3");
      root.style.setProperty("--border", "#e0e0e0");
      root.style.setProperty("--icon", "#5c5f62"); 
    }
   
    
  }, [isDarkMode]);
  
  
  return (
    <div className='Header'>
        <div className='Header-Logo'>
            <Link to='/'>Store</Link>
        </div>
            <ul  className={Mobil ? 'Nav-Link' : 'Nav-Mobil'}>
                <li><NavLink to={'/men'}>Men</NavLink></li>
                <li><NavLink to={'/women'}>Women</NavLink></li>
                <li><NavLink to={'/kids'}>Kids</NavLink></li>
                <li><NavLink to={'/phone'}>Phone</NavLink></li>
            </ul>
        <div className='Header-Icon' >
            <Link to={'/cart'}><i class="fa-solid fa-cart-shopping"><span>{cart.length >0 ?cart.length:''}</span></i></Link>
            <a className='fa-bars-fa-times' onClick={()=>setMobil(!Mobil)} >
            {
                Mobil? <i class="fa-solid fa-times"> </i> : <i class="fa-solid fa-bars"> </i>
            }
            </a>
            <a onClick={()=>setIsDarkMode(!isDarkMode)}>
        {
            isDarkMode ? <i class="fas fa-moon"></i> : <i class="fas fa-lightbulb"></i>       
        }
        </a>
        </div>
    </div>
  )
}

export default NavBar