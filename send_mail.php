<?php

$email = $_POST['email'];
$request = $_POST['request'];

if (mail("bogachuk566@gmail.com", "Mail from portfolio", $email . ' ' . $request, "From: <$email>")) {
    echo "Completed!";
}
else {
    echo "Failed!";
}