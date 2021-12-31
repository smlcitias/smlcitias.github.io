function to open(){
  if(document.getElementById("password").value=="Bioasp"){
    document.location="internal.html";
       return true;
    }else{
    alert("Password incorrect. Please re-enter the password.")
    return false;
    }
  });
