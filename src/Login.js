import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Components
import { validate } from './validate.js';
import styled from "./form.module.css"
//tost
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './tost.js';

const Login = () => {
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const [errors,setErrors] = useState({})
    const [touched,setTouched] = useState({})
    useEffect (() => {
        setErrors(validate(data,"login"))
    },[data,touched])
    const changeHandler = event => { 
            setData({...data,[event.target.name] : event.target.value})
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
                email : true,
                password : true
            })
        }
    }

    return (
        <div className={styled.component}>
            <form onSubmit={submitHandler} className={styled.form}>
                <h1 className={styled.header}>Form</h1>
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
                <div className={styled.buttons}>
                    <Link className={styled.link} to="/signUp">Login</Link>
                    <button className={styled.button} type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;