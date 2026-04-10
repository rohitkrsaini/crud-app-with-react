import axios from "axios";

export const getAll = async()=>{

   const url = "http://localhost:3000/user";
   try {
    const {data }= await axios.get(url,{headers: {
        "Content-Type": "application/json",
      }});
    console.log("api response",data);
    return data;
   } catch (error) {
    console.log("error ===>",error)
    return [];
   }
   
}

export const deleteUser = async (id) =>{
  const {data} = await axios.delete(`http://localhost:3000/user/${id}`)
}