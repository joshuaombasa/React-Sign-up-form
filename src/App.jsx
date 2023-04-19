import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <form className="signup-form">
        <input 
        type="email" 
        className="email" 
        placeholder='Email adress'
        />
        <input 
        type="password" 
        className="password" 
        placeholder='Password'
        />
        <input 
        type="password" 
        className="confpassword" 
        placeholder='Confirm password'
        />
        <div className="checkbox-container">
              <input 
              type="checkbox" 
              name="" 
        
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
