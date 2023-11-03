import React from 'react'
import signupImg from "../image/signup.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Homely"
      desc1="Bridging the Gap for Home Comforts"
     
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup