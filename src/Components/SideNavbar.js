import React from 'react'
import './SideNavbar.css'

const SideNavbar = () => {
  return (
    <>
    <input type="checkbox" name='' id='check' />
      <div className='container'>
        <label for="check">
          <span className='fas fa-times' id='times'></span>
          <span className='fa-solid fa-bars' id='bars'></span>
        </label>
        <div className='head'>menu</div>
        <ol>
          <li><a href="/"><i className="fa-solid fa-house"></i>Dashboard</a></li>
          <li><a href="/"><i className="fa-solid fa-people-group"></i>Services</a></li>
          <li><a href="/"><i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>Update</a></li>
          <li><a href="/"><i className="fa-solid fa-phone-flip"></i>Contact</a></li>
        </ol>
      </div>
      <section>
        <img src="./images/background.jpeg" alt="images" />
      </section>
    </>
  )
}

export default SideNavbar
