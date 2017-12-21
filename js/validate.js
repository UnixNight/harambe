// Validate.js
// Cristian Cerroni 2017

function validate() {
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var regEmail = /^[a-zA-Z0-9_\-\.]+@+[a-z0-9_\-\.]+\.[a-z.]{2,4}$/;

    var rMale = document.getElementById("rMale").checked;
    var rFemale = document.getElementById("rFemale").checked;
    var rOther = document.getElementById("rOther").checked;
    var rList = document.getElementsByName("rGender");

    for (i = 0; i < rList.length; i++) {
        if (rList[i].checked == true) {
            var gender = rList[i].value;
        }
    }

    if (rMale == false && rFemale == false && rOther == false) {
        alert("Please select a gender");
    }

    if (name == "" || name == null) {
        alert("Please enter a value in the name field.");
        return false;
    }

    if (regEmail.test(email) == false) {
        alert("Please enter a valid email address.");
    }
}

