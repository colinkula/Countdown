function sendMail() {
    // Disable the submit button to prevent multiple submissions
    document.getElementById("submitBtn").disabled = true;

    // Get the values of name and message fields
    var name = document.getElementById("name").value.trim();
    var message = document.getElementById("message").value.trim();

    // Check if name or message is empty
    if (!name || !message) {
        alert("Please enter your name and message.");
        // Re-enable the submit button
        document.getElementById("submitBtn").disabled = false;
        return; // Exit the function if either name or message is empty
    }

    // If name and message are not empty, proceed with sending the email
    var params = {
        name: name,
        message: message
    };

    const serviceID = "service_lgqot2x";
    const templateID = "template_x66t04s";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear the name and message fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Thanks for the message <3");

            // Redirect to index.html after sending the message
            window.location.href = 'index.html';
        })
        .catch((err) => {
            console.log(err);
            // Re-enable the submit button if an error occurs
            document.getElementById("submitBtn").disabled = false;
        });
}
