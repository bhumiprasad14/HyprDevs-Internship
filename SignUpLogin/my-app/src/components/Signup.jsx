import React, { useState } from 'react'

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const Signup = ({toggle}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [username, setUsername] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    let valid = true

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
      valid = false
    } else {
      setEmailError('')
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.')
      valid = false
    } else {
      setPasswordError('')
    }

    if (valid) {
      alert('Signup successful!')
      // Reset form (optional)
    }
  }

  return (
    <section className="signup">
    <div className="container">
      <div className="header"><span>Signup</span></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <i className="icons fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {submitted && emailError && <p className="error">{emailError}</p>}

        <div className="input">
          <i className="icons fa-solid fa-lock"></i>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <i className="icons fa-solid fa-lock"></i>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="show"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
        {submitted && passwordError && <p className="error">{passwordError}</p>}

        <div className="input">
          <i className="icons fa-solid fa-user"></i>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">Signup</button>
      </form>
      <p>Already have an account? <button onClick={toggle} className="link-btn">Login</button></p>
    </div>
    </section>
  )
}

export default Signup
