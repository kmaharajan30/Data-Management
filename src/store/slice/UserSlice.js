import { createSlice } from '@reduxjs/toolkit'
const initialState=[]

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            // console.log(action)
            state.push(action.payload);
        },
        editUSer:(state,action)=>{
            const{id,fname,lname,father,phone,address,gender,course}=action.payload;
            const existingUser=state.find(user=> user.id===id);
            if(existingUser){
                existingUser.fname=fname;
                existingUser.id=id;
                existingUser.lname=lname;
                existingUser.father=father;
                existingUser.phone=phone;
                existingUser.address=address;
                existingUser.gender=gender;
                existingUser.course=course;
            }
        },
        deleteUser:(state,action)=>{
            const{id}=action.payload;
            const existingUser=state.find(user=> user.id===id);
            if(existingUser){
                return state.filter(user=>user.id!==id);
            }
            

        }
    }
})

export const {addUser, editUSer,deleteUser}=userSlice.actions;
export default userSlice.reducer