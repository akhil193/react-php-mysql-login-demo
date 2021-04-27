<?php
require('config.php');
//Disable CORB = Cross-Origin Read Blocking (CORB) for testing
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/vendor/autoload.php';

use ReallySimpleJWT\Token;

/**
 * Sample data for demonstration
 */
$secret = 'sec!ReT423*&';
$expiration = time() + 3600;
$issuer = 'localhost';

//decode post input variables
$data = json_decode(file_get_contents("php://input"));

$sql = "INSERT INTO mstlogin (email,name,password,role) values('".$data->email."','".$data->name."','".$data->password."','".$data->role."')";

if ($conn->query($sql) === TRUE) {
  $insertSuccessfull = true;
} else {
  $insertSuccessfull = false;
}
$conn->close();







//set content type header to json
header('Content-type: application/json');

//check example if from db query
if($insertSuccessfull){
	
	$token = Token::create($data->email, $secret, $expiration, $issuer);

	/**
	 * Create response 200 ok
	 */
	echo json_encode([
		'token' => $token,
		'status' => 200,
		'message' => 'success'
	]);

}else{
 	/**
 	 * Create response 400 failed
 	 */
    echo json_encode([
		'status' => 400,
		'message' => 'failed!',
		'msg' => $sql
	]);
}
?>