import axios from "axios";

export const getAll = async()=>{

   const url = "https://crud-app-with-react-1.onrender.com/user";
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
  const {data} = await axios.delete(`https://crud-app-with-react-1.onrender.com/user/${id}`)
}