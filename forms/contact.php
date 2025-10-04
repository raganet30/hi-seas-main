<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $subject = htmlspecialchars(trim($_POST["subject"] ?? ""));
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    // Your receiving email address
    $to = "hiwifi@hi-seas.ph";

    // Email content
    $body = "
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <p><strong>Message:</strong><br>{$message}</p>
    ";

    // Email headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: {$name} <{$email}>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "OK"; // For your JS to detect success
    } else {
        echo "Error: Unable to send email.";
    }


    
} else {
    echo "Error: Invalid request.";
}
?>
