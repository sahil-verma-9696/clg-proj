const fetchData = async ()=>{
    const x = await fetch("http://localhost:3000/api/register");
    const data = await x
    console.log(data)
}
