function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsReg = /^[a-zA-Z ]{2,30}$/;
    if (skillsReg.test(skills) == false) {
        skillsError.innerHTML = "Please enter valid skills";
        return false;
    } else {
        skillsError.innerHTML = "";
        return true;
    }
} 