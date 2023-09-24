import dom from './domObject.js';
import api from './../../modules/dataFetching.js';

dom.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const registerUser = {
    userName: dom.userName.value,
    password: dom.confirmPassword.value,
    contact: dom.contact.value
  }

  try {
    const response = await api.fetch("register", registerUser);
    console.log(response)

  if (response.error) {
    dom.response.style.color = "red";
    dom.regError.style.color = "red";
    dom.response.innerHTML = response.error
    dom.form.style.backgroundColor = "red";
  } else {
    dom.response.style.color = "green";
    dom.response.innerHTML = response.msg
    dom.form.style.backgroundColor = "rgb(195, 255, 190)"
    console.log(response)
  }
  } catch (error) {
    console.log(error);
    dom.response.style.color = "red";
    dom.response.innerHTML = "server is not responding"
  }
})









