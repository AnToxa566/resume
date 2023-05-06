<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";

$mail->addAddress("bogachuk566@gmail.com");
$mail->Subject = "[Заявка с формы]";
$mail->Body = $_POST['email'] . ' ' . $_POST['request'];

$mail->send();
header('location: index.html');