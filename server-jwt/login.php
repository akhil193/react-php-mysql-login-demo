<?php
require('config.php');
//Disable CORB = Cross-Origin Read Blocking (CORB) for testing
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/vendor/autoload.php';

use ReallySimpleJWT\Token;

/**
 * Sample data for demonstration
 */
$userId = 1;
$secret = 'sec!ReT423*&';
$expiration = time() + 3600;
$issuer = 'localhost';

//decode post input variables
$data = json_decode(file_get_contents("php://input"));

//sample dummy credentials
$validCredentials = isset($data->username) && isset($data->password) && $data->username == 'uname' && $data->password == 'pass';

$sql = "SELECT loginid,name FROM mstlogin where loginid='".$data->username."' AND password='".$data->password."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $validCredentials = true;
} else {
  $validCredentials = false;
}
$conn->close();







//set content type header to json
header('Content-type: application/json');

//check example if from db query
if($validCredentials){
	
	$token = Token::create($userId, $secret, $expiration, $issuer);

	/**
	 * Create response 200 ok
	 */
	echo json_encode([
		'token' => $token,
		'status' => 200,
		'message' => 'Login success'
	]);

}else{
 	/**
 	 * Create response 400 failed
 	 */
    echo json_encode([
		'status' => 400,
		'message' => 'Login failed!'
	]);
}
?>