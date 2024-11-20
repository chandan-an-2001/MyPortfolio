<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "chandan07an@gmail.com";  // Your email address
    $subject = "New Message from: $name - $subject";
    $body = "You have received a new message from the contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n\n".
            "Message:\n$message";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message. Please try again.";
    }
}
?>
