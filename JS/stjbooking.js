function getAndParseInputData(){
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const teamName = document.getElementById("teamName").value;
    const stjPass = document.getElementById("stjPass").value;
    const bdPass = document.getElementById("bdPass").value;
    const msg = document.getElementById("msg").value;
    const JsonData = {fName: fName, lName: lName, team: teamName, stjPass: stjPass, bdPass: bdPass, msg: msg};
    removeValues();
    document.getElementById("skickaIn").innerHTML = "Thanks for your anmälan, vi återkommer inom kort med med mer information";
    postData(JsonData);
    }

function removeValues(){
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("teamName").value = "";
    document.getElementById("stjPass").value = "";
    document.getElementById("bdPass").value = "";
    document.getElementById("msg").value = "";
}
                        
                        
async function postData(JsonData){
    const url = "https://api-pv-kx61.onrender.com/stjartslaget";
            
    try{
        const resPost = await fetch(url, {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fName: JsonData.fName, 
            lName: JsonData.lName, 
            teamName: JsonData.team, 
            stjPass: JsonData.stjPass, 
            bdPass: JsonData.bdPass,
            msg: JsonData.msg})
            });
            if(!resPost.ok){
                throw new Error("response status: ${response.status}");
                }
    } catch(error){
        console.error(error.message);
        }
}