import dom from './modules/domObject.js';
import api from './modules/dataFetching.js';

dom.form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const loginData =  {
        crn : dom.userName.value,
        password : dom.newPassword.value
    }
    try {
        const response = await api.fetch("login",loginData);
        console.log(response)
        if(response.msg){
            location.href = "http://localhost:3000/dashboard"
        }
        console.log(loginData)
    } catch (error) {  
        console.log(error)
    }
});