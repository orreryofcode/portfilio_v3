import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    const mobileNav = document.querySelector(".nav__mobile");

    mobileNav.classList.add("nav__mobile--open");
    setIsOpen(true);
  };

  const closeNav = () => {
    const mobileNav = document.querySelector(".nav__mobile");

    mobileNav.classList.remove("nav__mobile--open");
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Nav */}
      <div className='nav__mobile--btn-open' onClick={openNav}>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='10'></rect>
          <rect y='20' width='100' height='10'></rect>
          <rect y='40' width='100' height='10'></rect>
        </svg>
      </div>

      <div className='nav__mobile'>
        <span className='nav__mobile--btn-close' onClick={closeNav}>
          X
        </span>
        <img src='./img/jpg/logo-wt.png' alt='' className='logo--mobile' />
        <nav className='nav__navbar--mobile'>
          <ul className='nav__list--mobile'>
            <li className='nav__list-item--mobile'>
              <Link to='/' className='nav__link--mobile'>
                01. About
              </Link>
            </li>
            <li className='nav__list-item--mobile'>
              <Link to='/works' className='nav__link--mobile'>
                02. Works
              </Link>
            </li>
          </ul>
          <div className='nav__mobile--social'>
            <a href='https://github.com/orreryofcode' target='_blank'>
              <img src='./img/svg/github-svgrepo-com.svg' alt='Github' />
            </a>
            <a href='mailto:orreryofcode@gmail.com'>
              <img src='./img/svg/mail-svgrepo-com.svg' alt='Email' />
            </a>
          </div>
        </nav>
      </div>

      {/* Reg Nav */}
      <div className='nav__container'>
        <img src='./img/jpg/logo-wt.png' alt='' className='logo' />

        <nav className='nav__navbar'>
          <ul className='nav__list'>
            <li className='nav__list-item'>
              <Link to='/' className='nav__link'>
                About
              </Link>
            </li>
            <li className='nav__list-item'>
              <Link to='/works' className='nav__link'>
                Works
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
