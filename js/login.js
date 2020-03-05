function to open(){
  if(document.getElementById("password").value=="Bioasp"){
    document.location="Resources.html";
       return true;
    }else{
    alert("密碼錯誤，請再輸入一次！")
    return false;
    }
  });
