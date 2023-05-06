<?php

$email = $_POST['email'];
$request = $_POST['request'];

if (mail("bogachuk566@gmail.com", $email . ' ' . $request, $email)) {
    echo "Completed!";
}
else {
    echo "Failed!";
}