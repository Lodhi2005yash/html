const form = document.getElementById("login").addEventListener("submit",function(e){
    e.preventDefault()

    const mobNumber = document.getElementById("number").value
    
    if(mobNumber==""){
        alert("enter a mobile number to continue")
        
     } else{
            alert("login succesfull")
        }

})