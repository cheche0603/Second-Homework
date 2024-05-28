let data = {

};


function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(data[email] != undefined){
        if (data[email] === password) {
            console.log("login success");
        }else{
            alert("帳號或密碼錯誤")
        }
    }else{
        alert("帳號或密碼錯誤")
}
event.preventDefault();
}

function register(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email =="" || password =="") {
        alert("帳號密碼不得為空!");
    }else{
        data[email] = password;
        alert("使用者已建立完成!");

        console.log(data);          
    }
}

document.getElementById("login").addEventListener("click",login);
document.getElementById("register").addEventListener("click",register);
