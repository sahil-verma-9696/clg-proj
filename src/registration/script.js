import dom from './modules/domObject.js';
import api from './modules/dataFetching.js';

dom.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const registerUser = {
    userName: dom.userName.value,
    password: dom.confirmPassword.value,
    contact: dom.contact.value
  }

  try {
    const response = await api.fetch("register", registerUser);

  if (!response) {
    dom.response.style.color = "red";
    dom.regError.style.color = "red";
    dom.response.innerHTML = "Fail to register"
    dom.form.style.backgroundColor = "red";
    dom.regError.innerHTML = "server is not responding"
  } else {
    dom.response.style.color = "green";
    dom.response.innerHTML = "Registration complete"
    dom.form.style.backgroundColor = "rgb(195, 255, 190)"
  }
  } catch (error) {
    console.log(error);
  }
})









