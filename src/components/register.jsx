import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       email:"",
       password:""
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(signup({ name:form.name,email:form.email, password:form.password}))
        navigate("/login")
    }
    return (
        <div className="login">
            <h1>Signup</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="email"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Password"/><br></br>
            <button onClick={()=>{handleSubmit()}}>Signup</button>
            <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}>Already Have Account</h3>
        </div>
    )
}