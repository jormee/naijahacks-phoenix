import React from 'react';

import homeStyles from './home.module.scss';


const Services = () => {

  return(
    <div className={homeStyles.services} id="services">
      <h3 className={homeStyles.center}>What we do</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <a href="/signin" className={homeStyles.button}>Get Started</a>
    </div>
  )
}

export default Services;