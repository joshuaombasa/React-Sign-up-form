import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <div className="App">
     <form className="signup-form">
        <input 
        type="email" 
        className="email" 
        placeholder='Email adress'
        onChange={handleChange}
        name="email"
        />
        <input 
        type="password" 
        className="password" 
        placeholder='Password'
        onChange={handleChange}
        name="password"
        />
        <input 
        type="password" 
        className="confpassword" 
        placeholder='Confirm password'
        onChange={handleChange}
        name="confpassword"
        />
        <div className="checkbox-container">
              <input 
              type="checkbox" 
              name="isJoinNewsLetter" 
              onChange={handleChange}
              id="isJoinNewsLetter" 
              placeholder=''
              />
              <label htmlFor="isJoinNewsLetter">I want to join the newsletter</label>
        </div>
        <button className='sign-up-btn'>Sign Up</button>
     </form>
    </div>
  )
}

export default App
