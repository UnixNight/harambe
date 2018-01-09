function validate() {
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var phone = document.getElementById("phoneNum").value;
    var email = document.getElementById("email").value;
    var emailTest = /^[a-zA-Z0-9_\-\.]+@+[a-z0-9_\-\.]+\.[a-z.]{2,4}$/;
    var comment = document.getElementById("comment").value;



    var rMale = document.getElementById("rMale").checked;
    var rFemale = document.getElementById("rFemale").checked;
    var rOther = document.getElementById("rOther").checked;
    var rList = document.getElementsByName("rGender");

    var check1 = document.getElementById("check1").checked;
    var check2 = document.getElementById("check2").checked;



    if (fName == "" || fName == null) {
        alert("Please enter first name.");
        return false;
    }

    if (lName == "" || lName == null) {
        alert("Please enter last name.");
        return false;
    }

    if (emailTest.test(email) == false) {
        alert("Please enter an email address.");
        return false;
    }

    if (phone == "" || phone == null || phone.length < 10 || phone.length > 10) {
        alert("Please enter a valid phone number.");
        return false;
    }

    for (i = 0; i < rList.length; i++) {
        if (rList[i].checked == true) {
            var gender = rList[i].value;
        }
    }

    if (rMale == false && rFemale == false && rOther == false) {
        alert("Please select a gender");
        return false;
    }

    if (comment == "" || comment == null) {
        alert("Please enter a comment.");
        return false;
    }

    if (check1 == false && check2 == false) {
        alert("Please check one of the boxes for preferred contact");
        return false;
    }


    alert(fName + "\n" + lName + "\n" + phone + "\n" + email + "\n" + comment);


    // im not doing my other form
}