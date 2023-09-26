import obj from "./modules/domObject.js";
import api from "./modules/dataFetching.js";

obj.lgBtn.addEventListener("click",async (event)=>{
    try{
       const responce = await fetch("http://localhost:3000/api/logout");
       const data = await responce.json();
       console.log(data)
    }catch(error){
        console.log(error)
    }
})

const session = async ()=>{

}
session();