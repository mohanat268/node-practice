async function getEmployeeData() {
    try{
        let res = await fetch("http://127.0.0.1:8080");
        let data = await res.json();
        console.log(data);
    }catch(err)
    {
        console.log(err);
    }
}
getEmployeeData();