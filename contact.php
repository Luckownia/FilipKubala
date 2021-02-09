<?php
$message = $_POST["message"];
$name = $_POST["name"];
$mail = "f.kubala@interia.pl";
$subject = "Od widza " .$name;
$headers = "Content-Type: text/html; charset=UTF-8";

mail($mail, $subject, $message, $headers);
?>
