const form=document.getElementById("login").addEventListener("submit",function(e){
    e.preventDefault()

    const email=document.getElementById("email").value
    const password=document.getElementById("pass").value
    

    if(email==""||password==""){
        alert("enter your email address and password to continue")
    
    }else{
        alert("login sacussfull")
        window.location="forgotpass.html"
    }

})