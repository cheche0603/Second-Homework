function UserData(name,account,password) {
    this.name = name;
    this.account = account;
    this.password = password;
}


function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(UserData[email] != undefined){
        if (UserData[email] === password) {
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
    let User = new UserData
             (document.getElementById("name").value,
               document.getElementById("email").value ,
              document.getElementById("password").value)

    if (User.email =="" || User.password =="") {
        alert("帳號密碼不得為空!");
    }else if(User.name ==""){
        alert("請輸入姓名!");
        }
        else{
        UserData[email] = password;
        alert("使用者已建立完成!");
        document.location.href="../UserSignIn.html";
        console.log(UserData);          
    }
}

