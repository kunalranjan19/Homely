import React from 'react'
import Template from '../components/Template'
import loginImg from "../image/login.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Homely."
      desc2=" Bridging the Gap for Home Comforts."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login