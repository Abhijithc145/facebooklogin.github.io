function printError(elemId, hintMsg) {
    document.getElementsByClassName(elemId).innerHTML = hintMsg;
}

function formvslidation(){
    var name = document.myform.fname.value;
    var surname = document.myform.sur.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var date = document.myform.date.value;
    var month = document.myform.month.value;
    var year = document.myform.year.value;
    var gender = document.myform.gender.value;


 var nameErr = surErr =emailErr =passwordErr=dateErr=monthErr =yearErr=genderErr =true;

 if(name==""){
    printError("nameErr", "Please enter your name");
 }else{
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        printError("nameErr", "");
        nameErr = false;
    }
 }

  if(surname==""){
      printError("surErr", "Please enter your surname")
  }else{
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(surname) === false) {
        printError("surErr", "Please enter a valid surname");
    } else {
        printError("surErr", "");
        surErr = false;
    }
  }

  if(email == "") {
    printError("emailErr", "Please enter your email address");
} else {
    var regex = /^\S+@\S+\.\S+$/ || /^[1-9]\d{9}$/;
    if(regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address or phone number");
    } else{
        printError("emailErr", "");
        emailErr = false;
    }
}
if(password =="" || pass_val.length<8)
 {
    printError("passwordErr","Please enter your password");
 }
 else
 {
   var regex = /^[1-9]\d{9}$/;
   if(regex.test(password) === false) {
       printError("passwordErr", "Please enter valid passowrd");
  } else {
     printError("passwordErr","");
     passwordErr = false;
 }
}

if(date == "Select") {
    printError("dateErr", "Please select your date");
} else {
    printError("dateErr", "");
    monthErr = false;
}
if(month == "Select") {
    printError("monthErr", "Please select your month");
} else {
    printError("monthErr", "");
    monthErr = false;
}
if(year== "Select") {
    printError("yearErr", "Please select your year");
} else {
    printError("yearErr", "");
    yearErr = false;
}

if(gender == " ") {

    printError("genderErr", "Please select your gender");

} else {

    printError("genderErr", " ");

    genderErr = false;

}
if((nameErr || surErr || emailErr || passwordErr || dateErr || monthErr || yearErr || genderErr) == true) {
    return false;
 } else {
    var dataPreview = "You've entered the following details: \n" +
    " Name: " + name + "\n" +
    "surname" + surname +"\n"+
    "Email or phone: " + email + "\n" +
    "date of brith: " + date + "\n" + month + "\n" + year + "\n" +
    "Gender: " + gender + "\n";
}
alert(dataPreview);
};
