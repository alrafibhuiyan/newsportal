var name, email, pass, rePass, age, religion, gender_value;
var usrNameV , emailV , passV , rePassV;
document.getElementById('rePasswordField').style.display = 'none';


//validate userName
var validationUserName = function () {
    name = document.getElementById('nameField').value;
    if (name == "") {
        document.getElementById('fullname').innerHTML = "<br>Please fill the Full name";
        usrNameV = false;
        return false;
    } else if (name.length < 5) {
        document.getElementById('fullname').innerHTML = "<br>Your Full name at least have to be 5 characters";
        usrNameV = false;
        return false;
    } else {
        document.getElementById('fullname').innerHTML = "";
        usrNameV = true;
        return true;
    }
};

//validate Email

var validationEmail = function () {

    email = document.getElementById('emailField').value;

    check();

    function check() {

        var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (expression.test(String(email).toLowerCase())) {

            document.getElementById('invalidEmail').innerHTML = "";
            emailV = true;
            return true;

        } else {
            document.getElementById('invalidEmail').innerHTML = "<br>Please Enter Correct email";
            emailV = false;
            return false;
        }
    }

};


//validate Password

var validationPass = function () {
    pass = document.getElementById('passwordField').value;

    if (pass.length < 8) {
        document.getElementById('invalidPass').innerHTML = "<br>Your Password length should be equal or more than 8 Characters";
        passV = false;
        return false;

    } else {
        document.getElementById('invalidPass').innerHTML = "";
        document.getElementById('rePasswordField').style.display = 'block';
        passV = true;
        return true;

    }

};


//validate Repassword

var validationRePass = function () {
    rePass = document.getElementById('rePasswordField').value;

    console.log('pass :' + pass);
    console.log('repass :' + rePass);

    if (pass !== rePass) {
        document.getElementById('invalidRePass').innerHTML = "<br>Your Password Didn't Match";
        rePassV = false;
        

    } else {
        document.getElementById('invalidRePass').innerHTML = "";
        rePassV = true;
      
    }

};


//validate Age

function validationAge() {
    age = document.getElementById('ageField').value;

    console.log('age :' + age);

    if (age === "") {
        document.getElementById('invalidAge').innerHTML = "<br>Please Enter Your Age";
        return false;
    }

}


//select religion

function selectReligion() {


    religion = document.getElementById('religionField').value;
    console.log('religion :' + religion);
}


//agreement



function main() {

    var gender = document.getElementsByName('gender');


    if (usrNameV === true && emailV === true && passV === true && rePassV === true) {
        var checked = document.getElementById("agree").checked;
        if (checked !== true) {
            document.getElementById('invalidCheck').innerHTML = "<br>Terms And Conditions must be checked";
            console.log(checked);
            return false;
        }

        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                gender_value = gender[i].value;
            }
        }



    }

    else {
        console.log('no');
        return false;
    } 



}