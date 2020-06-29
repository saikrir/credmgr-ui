import React from 'react';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark justify-content-between '>
        <a className='navbar-brand' href='#'>
          <span className='navbar-text '>Credential System</span>
        </a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link'> Welcome User </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
