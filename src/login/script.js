const fetchData = async ()=>{
    const x = await fetch("http://localhost:3000/api/register");
    const data = await x.json()
    console.log(data)
}
fetchData()
