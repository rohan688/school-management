import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { addteacher } from "../redux/addteacher/action";


export const Addteacher  = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       gender:"",
       age:0,
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(addteacher({ name:form.name,gender:form.gender, age:form.age}))
        navigate("/")
    }
    return (
        <div className="addteacher">
            <h1>Add teachers</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="gender" placeholder="gender"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="number" name="" id="age" placeholder="age"/><br></br>
            <button onClick={()=>{handleSubmit()}}>ADD TEACHER</button>
           
        </div>
    )
}