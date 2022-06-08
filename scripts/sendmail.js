function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "<senders email address>",
    Password: "<email password>",
    To: "harow78830@musezoo.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("fname").value,
    Body: document.getElementById("subject").value,
  }).then((message) => alert("mail sent successfully"));
}
