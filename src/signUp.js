import React,{ useEffect, useState } from 'react';
import { validate } from './validate.js';
import styled from "./form.module.css";
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './tost.js';
const SignUp = () => {
    const [data,setData] = useState({
        name : "" ,
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false ,

    })
    const [errors,setErrors] = useState({})
    const [touched,setTouched] = useState({})
    useEffect (() => {
        setErrors(validate(data,"signUp"))
    },[data,touched])
    const changeHandler = event => {
        if(event.target.name === "isAccepted") {
            setData({...data,[event.target.name] : event.target.checked})
        } else {
            setData({...data,[event.target.name] : event.target.value})
        }
    }

    const focusHandler = event => {
        setTouched({...touched,[event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault() ;
        if(!Object.keys(errors).length) {
            notify("you signed up successfully","success")
        }else{
            notify("Invalid data!","error")
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styled.component}>
            <form onSubmit={submitHandler} className={styled.form}>
                <h1 className={styled.header}>Form</h1>
                <div className={styled.input}>
                    <label>Name :</label>
                    <br />
                    <input
                     type="text" 
                     name="name" 
                     value={data.name} 
                     onChange={changeHandler} 
                     onFocus={focusHandler}
                     className={(errors.name && touched.name) ? styled.click : styled.formInput}
                     />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <br />
                <br />
                <div className={styled.input}>
                    <label>Email :</label>
                    <br />
                    <input 
                    type="text" 
                    name="email"
                     value={data.email} 
                     onChange={changeHandler} 
                     onFocus={focusHandler}
                     className={(errors.email && touched.email) ? styled.click : styled.formInput}
                     />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <br />
                <br />
                <div className={styled.input}>
                    <label>Password :</label>
                    <br />
                    <input 
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}
                    className={(errors.password && touched.password) ? styled.click : styled.formInput}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <br />
                <br />
                <div className={styled.input}>
                    <label>confirm Password :</label>
                    <br />
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}
                    className={(errors.confirmPassword && touched.confirmPassword) ? styled.click : styled.formInput}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <br />
                <br />
                <div className={styled.input}>
                    <div className={styled.checkbox}>
                    <label>I accet terms of privacy policy</label>
                    <input 
                    type="checkbox"
                     name="isAccepted" 
                     value={data.isAccepted} 
                     onChange={changeHandler} 
                     onFocus={focusHandler}
                     className={(errors.isAccepted && touched.isAccepted) ? styled.click : styled.formInput}
                     />
                     </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
                <div className={styled.buttons}>
                    <Link className={styled.link} to="/login">Login</Link>
                    <button className={styled.button} type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;