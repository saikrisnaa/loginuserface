import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../helpers/Api";
import Spinner from 'react-bootstrap/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import "../Csys/all.css"

const Loginn = () => {

    const [email, setEmail] = useState("");
    const [Spinneer,setSpinr] = useState(false);

    const navigate = navigate();



    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpinr(true)
            const data = {
                email: email
            }

            const response = await sentOtpFunction(data);

            if (response.status === 200) {
                setSpinr(false)
                navigate("/user/otp",{state:email})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

  return (
    <>
     <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                    <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' required/>
                            <button className='btn' onClick={sendOtp}>Login</button>
                        </div>
                        <p>Don't have and account <NavLink to="/register">Sing up</NavLink> </p>
                    </form>
                    </div>
                    <ToastContainer/>
            </section>
    </>
  )
};

export default Loginn
