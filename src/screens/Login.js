import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Login() {

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="Password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/createuser" className="m-3 btn btn-danger">I am a new User</Link>
        </form>
      </div>
    </div>
  )
}
