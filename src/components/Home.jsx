import axios from "axios";
import { useEffect, useState } from "react"


export const Home = ()=>{
   const [db,setdb]=useState([]);
   const [page,setpage]=useState(1);
   useEffect(()=>{
    axios.get(`https://schooldata1.herokuapp.com/teachers?_page=${page}&_limit=2`).then((res)=>{
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
    return (
        <div>
          <button>ADD TEACHERS</button><br></br>
          <h3>SORT BY AGE</h3>
          <button onClick={handlesorthtl}>High To Low</button>
          <button onClick={handlesortlth}>Low To High</button>
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