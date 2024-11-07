function validate(){
    let userid = document.getElementById("userid").value;
    let password = document.getElementById("pwd").value;
    if(userid != "admin" || password != "admin"){
        alert("Please enter valid credentials")
    }
    else{

    }
}