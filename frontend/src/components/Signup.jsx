import { useState } from "react"
import axios from "axios"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    if(!name || !email || !password){
      alert("Fill all fields")
      return
    }

    try {

      await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password
        }
      )

      alert("Signup Successful")

      setName("")
      setEmail("")
      setPassword("")

    } catch (error) {

      console.log(error)

      alert("Signup Failed")

    }

  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Smart Mall Hub
        </h1>

        <p>
          Create Your Account
        </p>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Sign Up
        </button>

      </div>

    </div>

  )

}

export default Signup