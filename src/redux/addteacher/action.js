export const ADDTEACHER_LOADING = "ADDTEACHER_LOADING";
export const ADDTEACHER_SUCCESS = "ADDTEACHER_SUCCESS";
export const ADDTEACHER_FAILURE = "ADDTEACHER_FAILURE";

export const addteacherLoading=()=>({
    type:ADDTEACHER_LOADING,
});

export const addteacherSuccess = (payload)=>({
    type:ADDTEACHER_SUCCESS,
    payload
});

export const addteacherFailure = ()=>({
    type:ADDTEACHER_FAILURE,
})

export const addteacher = ({name,gender, age})=>(dispatch)=>{
    dispatch(addteacherLoading())
        fetch(`https://schooldata1.herokuapp.com/teachers`,{
          method:"post",
          body:JSON.stringify({
              "name":name,
              "gender":gender,
              "gender":age
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(addteacherSuccess()))
        .catch(error=>dispatch(addteacherFailure()))
}