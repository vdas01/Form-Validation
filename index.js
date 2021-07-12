let username = document.getElementById('username');
let email= document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let check = document.getElementById('check');



const isEmail = (emailVal)=>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol == 0 || atSymbol == emailVal.length-1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot<=atSymbol + 3) return false;
    if(dot == 0 || dot == emailVal.length-1) return false;
    return true;
}

function setErrormssg(input,errormssg){
   
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.classList.remove('er');
    small.innerText = errormssg;
    formControl.classList.add("error");
    
        const right = formControl.querySelector('.fa-check-circle');
    right.classList.add('right');
    
    
    const wrong = formControl.querySelector('.fa-exclamation-circle');
    wrong.classList.remove('wrong');
}
function setSuccessmssg(input){
  
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    
        const wrong = formControl.querySelector('.fa-exclamation-circle');
    wrong.classList.add('wrong');
    
      const right = formControl.querySelector('.fa-check-circle');
      right.classList.remove('right');
}
// function sendData(sRate,count){
//     if(sRate === count){
//         alert('Registration Successfull');
//         swal("Good job!", "You clicked the button!", "success");
//     }
// }
function successMssg(usernameVal){
    let formcont = document.getElementsByClassName('form-control');
    var count =-1;
    for(var i=0;i<formcont.length;i++){
        if(formcont[i].className=== "form-control success"){
            // var sRate = 0 + i;
            // sendData(sRate,count)
            count++;
        }
        else{
            return false;
        } 
    }
    if(count == formcont.length-1){
        alert('Registration Successfull');
        swal("Good job! " + usernameVal, "Registration Completed", "success");
        // location.href = `demo.html?username = ${usernameVal}`;
    }
}
//validation for username
const validate = ()=>{
    const usernameVal =username.value.trim();
const emailVal= email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const checkVal = check.value.trim();

    
if(usernameVal == "")
  setErrormssg(username,"Username can't be blank");
else if(usernameVal.length<=2)
setErrormssg(username,"Username should be min of 3 char");
else 
setSuccessmssg(username);

//email for validation
if(emailVal == "")
setErrormssg(email,"Email can't be blank");
else if(!isEmail(emailVal))
setErrormssg(email,"Email format is wrong");
else
setSuccessmssg(email);

//phone number for validation
if(phoneVal == "")
setErrormssg(phone,"Phone number can't be blank");
else if(phoneVal.length<10)
setErrormssg(phone,"Phone number shouldn't be less than 10 numbers");
else
setSuccessmssg(phone);

// password validation
if(passwordVal == "")
setErrormssg(password,"Password can't be blank");
 if(passwordVal.length<=4)
setErrormssg(password,"Password should be atleast 8 characters long");
else
setSuccessmssg(password);

//confirm password validation
if(passwordVal == "")
setErrormssg(check,"Password can't be blank");
else if(checkVal != passwordVal)
setErrormssg(check,"Password isn't matching");
else
setSuccessmssg(check);
     successMssg(usernameVal);
}