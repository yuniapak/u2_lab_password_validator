import '../styles/Validator.css'

const Validator = (props) => {



  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" onChange = {props.onChange} value = {props.username}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange = {props.onChange1} value ={props.password}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm" onChange={props.onChange2} value ={props.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={props.match} onChange={props.handleChange} value={props.valid}>Sign Up</button>
        <p>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
