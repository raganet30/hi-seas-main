<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Adjust path if needed

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');
  $subject = htmlspecialchars($_POST['subject'] ?? '');
  $message = htmlspecialchars($_POST['message'] ?? '');

  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';        // Or smtp.hostinger.com
    $mail->SMTPAuth = true;
    $mail->Username = 'youremail@gmail.com'; // Your SMTP email (e.g., hiseassupport@gmail.com)
    $mail->Password = 'yourpassword';     // App password or hosting email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('youremail@gmail.com', 'HI-SEAS Website'); /// Your SMTP email 
    $mail->addAddress('hiwifi@hi-seas.ph', 'HI-SEAS'); // Where you want to receive messages
    $mail->addReplyTo($email, $name); // Visitor’s email, so you can reply


    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    $mail->send();
    echo 'OK'; // Frontend will show "Your message has been sent"
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}
?>