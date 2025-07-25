class Password{
    constructor(){
        console.log("Welcome to a password generator")
    }
    
    GeneratePassword(len){
        if(len<7){
           alert("Password would be minimum 8 character")
        }
        else{
            let password=""
            let char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let number ="0123456789";
            let symbol ="!@#$%^&*()_+"
            let i=0
            while(i<len){
                let random1 = char[Math.floor(Math.random() * char.length)];
                password+=random1
                i++;
                if(i==len){
                    break;
                }
                let random2 =number[Math.floor(Math.random() * number.length)];
                password+=random2
                i++;
                if(i==len){
                    break;
                }
                let random3 =symbol[Math.floor(Math.random() * symbol.length)];
                password+=random3
                i++;
                if(i==len){
                    break;
                }
            }
            console.log(password)
            return password;
        }
    }

}

let a = new Password();

let btn = document.querySelector(".btn1")
let Copy =document.getElementById("Copy");
let LengthofPassword =document.getElementById("PasswordLeangth");
let ShowPassword =document.getElementById("ShowPassword");
btn.addEventListener('click',(e)=>{
    let len = LengthofPassword.value;
    // a.GeneratePassword(len);
    Copy.innerHTML='<i class="fa-solid fa-copy"></i>Copy'
    Copy.style.color="white"
    let password = a.GeneratePassword(len)
    ShowPassword.innerHTML=password
})


Copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(ShowPassword.innerHTML);
    Copy.style.color="gray"
    Copy.textContent = 'Copied!'
})