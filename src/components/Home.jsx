import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const Home = ()=>{
   const [db,setdb]=useState([]);
   const [page,setpage]=useState(1);
   const navigate=useNavigate()
   useEffect(()=>{
    axios.get(`https://schooldata1.herokuapp.com/teachers`).then((res)=>{
        setdb(res.data)
      }) 
   },[])

   const handlesorthtl = ()=>{
       axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
           setdb(res.data.sort((a,b)=>{
               return b.age-a.age;
           }))
       })
   }
   
   const handlesortlth = ()=>{
    axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
        setdb(res.data.sort((a,b)=>{
            return a.age-b.age;
        }))
    })
}
const handleall = ()=>{
    axios.get(`https://schooldata1.herokuapp.com/teachers`).then((res)=>{
        setdb(res.data)
      }) 
}
const handlefiltermen = ()=>{
    axios.get('https://schooldata1.herokuapp.com/teachers').then((res)=>{setdb(res.data.filter((e)=>{if (e.gender==="Male") {return true} else{return false}}))})
}
const handlefilterwomen = ()=>{
    axios.get('https://schooldata1.herokuapp.com/teachers').then((res)=>{setdb(res.data.filter((e)=>{if (e.gender==="Female") {return true} else{return false}}))})
}

    return (
        <div>
          <button onClick={()=>{navigate("/teachers")}}>ADD TEACHERS</button><br></br>
          <h3>SORT BY AGE</h3>
          <button onClick={handlesorthtl}>High To Low</button>
          <button onClick={handlesortlth}>Low To High</button>
          <h3>Filter by gender</h3>
          <button onClick={handlefiltermen}>MEN</button>
          <button onClick={handlefilterwomen}>WOMEN</button>
          <button onClick={handleall}>ALL</button>

          <div className="tablediv">
          <table>
              <thead>
                  <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Gender</th>
                 </tr>
              </thead>
             <tbody>
                 {db.map((e)=><tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.age}</td>
                   <td>{e.gender}</td> 
                 </tr>)}
             </tbody>
          </table>
          <button disabled={page==1} onClick={()=>{setpage((page)=>page - 1)}}>PREV</button>
        <button  onClick={()=>{setpage((page)=>page + 1)}}>NEXT</button>
          </div>
        </div>
    )
}