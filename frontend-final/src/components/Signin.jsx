import { useState } from "react"
import axios from "axios"

function Signin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignin = async () => {

    if(!email || !password){
      alert("Fill all fields")
      return
    }

    try {

      const res = await axios.post(
        "https://intern-project-ckz7.onrender.com/api/auth/signin",
        {
          email,
          password
        }
      )

      alert("Signin Successful")

      localStorage.setItem(
        "token",
        res.data.token
      )
      localStorage.setItem(
        "email", email
      )
      window.location.reload()

    } catch (error) {

      console.log(error)

      alert("Invalid Email or Password")

    }

  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Smart Mall Hub
        </h1>

        <p>
          Welcome Back
        </p>

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

        <button onClick={handleSignin}>
          Sign In
        </button>

      </div>

    </div>

  )

}

export default Signin
