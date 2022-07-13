import { useState } from 'react'
import Validator from './components/Validator'

const App = () => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirm, setPasswordConfirm] = useState('')
  let [valid, setValid] = useState(true)

  const handleChange = (event) => {
    event.preventDefault()
    setValid(event.target.value)
  }
  const handleChange1 = (event) => {
    event.preventDefault()
    setUsername(event.target.value)
  }
  const handleChange2 = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
  }
  const handleChange3 = (event) => {
    event.preventDefault()
    setPasswordConfirm(event.target.value)
  }
  const match = () => {
    if (password === passwordConfirm) {
      valid = true
      alert('match')
    } else {
      valid = false
      alert('not matched')
    }
  }

  return (
    <Validator
      onChange={handleChange1}
      onChange1={handleChange2}
      onChange2={handleChange3}
      handleChange={handleChange}
      match={match}
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      valid={valid}
    />
  )
}

export default App
