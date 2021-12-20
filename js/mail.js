function myFun(){
    var a = document.getElementById("emailinput").value;
    if(a.indexOf('@')<=0)  // antojebin@gmail.com 
    {  
        alert("Email is Invalid");  
        return false;
    }
     if(a.charAt(a.length-4)!='.'){   
        alert("Email is Invalid"); 
        return false;
     } 
     /*if(a.charAt(a.length-3)!='.'){  
        alert("Email Should Have .");
        return false;

    } */
    
}