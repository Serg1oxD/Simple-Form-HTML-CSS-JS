let emailValided = false;
let datesValided = false;

function checkInformation(){
    let getName = document.querySelector(".form-name").value;
    let getEmail = document.querySelector(".form-email").value;
    let getMess = document.querySelector(".form-placeholder").value;

    if(getName.length == 0){
        alert("You need enter a name, try again");
        location.reload();
    }
    else if(getMess.length == 0){
        alert("You need enter a message, try again");
        oclation.reload();
    }
    else{
        datesValided = true;
    }

    if(getEmail.length == 0){
        alert("You need enter a email, try again");
        location.reload();
    }

    if(getEmail.length >= 1){
        validateEmail(getEmail);
    }

    if(emailValided && datesValided) alert("You Writed:" + "\n" + "Name: " + getName + "\n" + "Email: " + getEmail + "\n" + "Message: " + getMess);
}

function validateEmail(email) 
{
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailValided = true;
    }
    else{
        emailValided = false;
        alert("Invalid email")
        location.reload();
    }
}