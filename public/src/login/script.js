import dom from './modules/domObject.js';
import api from './modules/dataFetching.js';

dom.form.addEventListener("submit",async (event)=>{
    event.preventDefault();

    try {
        const response = await api.fetch("login",{userName:"sahil",password:1234});
        console.log(response)
        if(response.msg){
            location.href = "http://localhost:3000/dashboard"
        }
    } catch (error) {  
        console.log(error)
    }
});