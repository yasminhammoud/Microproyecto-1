/* ------------------------------ SLIDESHOW  ----------------------------- */
const slideShowArray = ["./images/slide1.png" , "./images/slide2.png", "./images/slide3.png","./images/slide4.png","./images/slide5.png"]

function showImage(index) {
    document.getElementById("image-to-display").src = slideShowArray[index];
}
/* ---------------------------------------------------------------------------- */

/* ----------------------------------- SKILLS  -------------------------------- */

/* JSON  */ 
var skills = {
    skill1: {"name": "Python", "level": "85" },
    skill2: {"name": "Java", "level": "75" },
    skill3: {"name": "HTML", "level": "60" },
    skill4: {"name": "CSS", "level": "55" },
    skill5: {"name": "JavaScript", "level": "40" },
    skill6: {"name": "Assembler", "level": "15" },
}


/* Skills Name HTML */
document.getElementById("skill1Name").innerHTML = skills.skill1.name;
document.getElementById("skill2Name").innerHTML = skills.skill2.name;
document.getElementById("skill3Name").innerHTML = skills.skill3.name;
document.getElementById("skill4Name").innerHTML = skills.skill4.name;
document.getElementById("skill5Name").innerHTML = skills.skill5.name;
document.getElementById("skill6Name").innerHTML = skills.skill6.name;

/* Skills Level HTML */
document.getElementById("skill1Level").innerHTML = skills.skill1.level + "%";
document.getElementById("skill2Level").innerHTML = skills.skill2.level + "%";
document.getElementById("skill3Level").innerHTML = skills.skill3.level + "%";
document.getElementById("skill4Level").innerHTML = skills.skill4.level + "%";
document.getElementById("skill5Level").innerHTML = skills.skill5.level + "%";
document.getElementById("skill6Level").innerHTML = skills.skill6.level + "%";

/* Skills Level CSS */
document.getElementById("fillSkill1").style.strokeDashoffset = (320 - (320 * Number(skills.skill1.level)) /100);
document.getElementById("fillSkill2").style.strokeDashoffset = (320 - (320 * Number(skills.skill2.level)) /100);
document.getElementById("fillSkill3").style.strokeDashoffset = (320 - (320 * Number(skills.skill3.level)) /100);
document.getElementById("fillSkill4").style.strokeDashoffset = (320 - (320 * Number(skills.skill4.level)) /100);
document.getElementById("fillSkill5").style.strokeDashoffset = (320 - (320 * Number(skills.skill5.level)) /100);
document.getElementById("fillSkill6").style.strokeDashoffset = (320 - (320 * Number(skills.skill6.level)) /100);
/* ---------------------------------------------------------------------------- */


/* ------------------------------ FORM VALIDATION ----------------------------- */
function validateFields() {
    
    var fullName = document.getElementById("fullNameField").value;
    var email = String(document.getElementById("emailField").value).toLowerCase();
    var message = document.getElementById("messageField").value;
    var nameCheckFilter = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var emailCheckFilter = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (fullName == null || email == null || message == null || typeof fullName == 'undefined' || typeof email == 'undefined' || typeof message == 'undefined') {
        alert("Por favor, llenar todos los campos de texto"); 
    } 
    else if (!nameCheckFilter.test(fullName)) {
        alert("Por favor, ingrese un nombre válido (Nombre y Apellido)"); 
    }
    else if (!emailCheckFilter.test(email)){
        alert("Por favor, ingrese un correo electrónico válido"); 
    }
    else {
        alert("¡Su solicitud ha sido enviada!");
        var formMessage = { guestName: fullName, guestEmail: email, guestMessage: message };
        console.log(formMessage);
    }
}
/* ---------------------------------------------------------------------------- */