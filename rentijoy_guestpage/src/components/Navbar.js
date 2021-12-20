import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    let log=localStorage.getItem('log')
    log==='true'?log=true:log=false;
    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };
  useEffect(() => { showButton();}, []);
  window.addEventListener('resize', showButton);
  let userdetail = localStorage.getItem('user_mail')
   userdetail = JSON.parse(userdetail)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RentiJoy<i className="fas fa-tape" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          {button && !log && <Button buttonStyle='btn--outline'>LOGIN/REGISTER</Button>}
           {
                log && <a href='/userinfo'> <button className='btn2'>{userdetail.users.userName}</button></a>
           }

        </div>
      </nav>
    </>
  );
}

export default Navbar;