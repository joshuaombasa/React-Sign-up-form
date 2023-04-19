import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  
  const [formData, setFormData] = React.useState(
    {
      email: '',
      password: '',
      confpassword: '',
      isJoinNewsLetter: true
    }
  )

  console.log(formData)

  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div className="App">
     <form className="signup-form">
        <input 
        type="email" 
        className="email" 
        placeholder='Email adress'
        onChange={handleChange}
        name="email"
        value={formData.email}
        />
        <input 
        type="password" 
        className="password" 
        placeholder='Password'
        onChange={handleChange}
        name="password"
        value={formData.password}
        />
        <input 
        type="password" 
        className="confpassword" 
        placeholder='Confirm password'
        onChange={handleChange}
        name="confpassword"
        value={formData.confpassword}
        />
        <div className="checkbox-container">
              <input 
              type="checkbox" 
              name="isJoinNewsLetter" 
              onChange={handleChange}
              id="isJoinNewsLetter" 
              checked={formData.isJoinNewsLetter}
              />
              <label htmlFor="isJoinNewsLetter">I want to join the newsletter</label>
        </div>
        <button className='sign-up-btn'>Sign Up</button>
     </form>
    </div>
  )
}

export default App
