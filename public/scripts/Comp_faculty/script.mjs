const nameObj = document.querySelector(".name");

const cookie = document.cookie;
const crn = cookie.split(";")[2].split("=")[1]
const contact = cookie.split(";")[0].split("=")[1]
const name = cookie.split(";")[1].split("=")[1];
nameObj.value = name
console.log(contact)