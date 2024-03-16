
function cv() {
    window.open("OlaSkeie.pdf", '_blank');
}
function kontakt() {
    window.scrollBy(0, 800);
}
function github() {
    window.open("https://github.com/settings/profile", "_blank");
}
function linkedin() {
    window.open("https://www.linkedin.com/in/ola-gabriel-huus-skeie-67b79a291/", "_blank");
}
function sjekkMail() {
    var i = document.getElementById("epost");
    var input = document.getElementById("navn");
    if (input.value.trim() === "") {
        return false;
    }
    input = document.getElementById("epost");
    if (input.value.trim() === "") {
        return false;
    }
    input = document.getElementById("melding");
    if (input.value.trim() === "") {
        return false;
    }
    return true;
};
function sendMail(bool) {
    var host = document.getElementById("epost");
    var navn = document.getElementById("navn");
    var melding = document.getElementById("melding");
    console.log(bool);
    if (!bool) {
        return false;
    }
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "olahuusskeie@gmail.com",
        Password: "AFF2AC48713D8917CD5E052D9C02F1D1DE6B",
        To: "olahuusskeie@gmail.com",
        From: "olahuusskeie@gmail.com",
        Subject: host.value,
        Body: "Mail fra: " + host.value + " \n" + melding.value,
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#cv").onclick = cv;
    document.querySelector("#github").onclick = github;
    document.querySelector("#linkedin").onclick = linkedin;
    document.querySelector("#kontakt").onclick = kontakt;
    document.querySelector("#send").onclick = function(){
        var returVerdi = sjekkMail();
        sendMail(returVerdi);
    }



});