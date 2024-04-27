import { NavLink } from 'react-router-dom';


const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? "activeLink" :undefined)}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? "activeLink" :undefined)}>About</NavLink>
            </li>
            <li>
                <NavLink to="/projects" className={({isActive}) => (isActive ? "activeLink" :undefined)}>Projects</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => (isActive ? "activeLink" :undefined)}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menu
