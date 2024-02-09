import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Homee = () => {
  const navigate = useNavigate();
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <div>Welcome to the home page</div>
  )
}

export default Homee