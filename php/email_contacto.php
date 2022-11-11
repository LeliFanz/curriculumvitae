<?php
if(isset($_POST['email'])) {

$first_name= ucwords ($_POST['$nombre']);
$mail= strtolower ($_POST['$email']);
$phone= $_POST['$telefono'];
$comment= ucwords ($_POST['$mensaje']);

$domain = $_SERVER["HTTP_HOST"]; 
$email_origen  = "" .$mail. ""; 
$email_copia   = "lelifanz@gmail.com"; 
$email_destino = "lelifanz@gmail.com";   

$asunto  = "Contacto de la Web"; 

$mensaje = '<div style="color:#666; margin:5% auto;-webkit-box-shadow: 0 0 5px #24607f;-moz-box-shadow: 0 0 5px #24607f;-o-box-shadow: 0 0 5px #24607f;box-shadow: 0 0 5px #24607f;border:1px solid #d6d2d2;border-radius:5px;padding:10px;width:90%;heigth:300px;">

Nombre:		' . $first_name . '<br/>
Email:  	' . $mail . '<br/>
Telefono:	' . $phone . '<br/>
Mensaje:	' . $comment . '<br/>
			</div>';

	$formato          = "html"; 
	
	//*****************************************************************// 
	$headers .= "From: {LF=Vitae} <$email_origen>\r\n".
	$headers .= "MIME-Version: 1.0 \r\n"; 
	$headers .= "Return-Path:$email_origen\r\n"; 
  $headers .= "X-Sender: $email_origen \r\n"; 
  $headers .= "X-Priority: 1 \r\n"; 
	$headers .= "Content-Transfer-Encoding: 7bit \r\n"; 
	$headers .= "Content-Type: text/html; charset=iso-8859-1 \r\n";
	'X-Mailer: PHP/' . phpversion();

	@mail($email_destino,$asunto,$mensaje,$headers);
//*****************************************************************// 
}
?>