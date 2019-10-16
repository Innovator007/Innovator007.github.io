document.querySelector(".success-contact > .close").addEventListener("click", function() {
    document.querySelector(".success-contact").style.display = "none";
});

document.querySelector(".error-contact > .close").addEventListener("click", function() {
    document.querySelector(".error-contact").style.display = "none";
});

function formatDate() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    return today;
}

function mail(e) {
    e.preventDefault();
    var date = formatDate();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value || "Enquiry";
    var message = document.getElementById('message').value;
    if(name !== "" && email !== "" && message !== "") {
        document.querySelector(".contact-btn").innerHTML = "<span class='btn-loading'><span>";
        var template_params = {
            "from_name": name,
            "to_name": 'Iliyas Attarwala',
            "from_email": email,
            "subject": subject,
            "date_sent": date,
            "message_html": message
        }
    
        var service_id = "gmail";
        var template_id = "template_IobzSpwl";
        emailjs.send(service_id,template_id,template_params)
            .then(function(response) {
                console.log("Email sent successfuly", response.status, response.text);
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById("subject").value = "";
                document.getElementById('message').value = "";
                document.querySelector(".success-contact").style.display = "block";
                document.querySelector(".contact-btn").innerHTML = "Send";
            }, function(error) {
                document.querySelector(".error-contact").style.display = "block";
                console.log('FAILED...', error);
            });
    }
}