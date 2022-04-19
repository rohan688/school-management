import { ADDTEACHER_SUCCESS,ADDTEACHER_LOADING,ADDTEACHER_FAILURE} from "./action"
const initState = {
    loading:false,
    error:false,
}

 export const addteacherReducer = (store=initState, {type, payload})=>{
    switch(type){
        case ADDTEACHER_LOADING:
            return {...store, loading:true};
        case ADDTEACHER_SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
            }
        case ADDTEACHER_FAILURE:
            return {
                ...store,
                loading:false,
                error:true,
            }
        default:
            return store;
    }
}